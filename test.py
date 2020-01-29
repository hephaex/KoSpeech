import os
import queue
import random
from data.baseDataset import BaseDataset
from definition import *
import torch
import pickle
import torch.nn as nn
from hyperParams import HyperParams
from loader.baseLoader import BaseDataLoader
from loader.loader import load_data_list, load_targets
from train.distance import get_distance
from train.save_and_load import load_model

def test(model, queue, device):
    logger.info('evaluate() start')
    total_dist = 0
    total_length = 0
    total_sent_num = 0

    model.eval()

    with torch.no_grad():
        while True:
            feats, scripts, feat_lengths, script_lengths = queue.get()
            if feats.shape[0] == 0:
                break

            feats = feats.to(device)
            scripts = scripts.to(device)
            target = scripts[:, 1:]

            model.module.flatten_parameters()
            logit = model(feats, feat_lengths, scripts, teacher_forcing_ratio=0.0)

            logit = torch.stack(logit, dim=1).to(device)
            y_hat = logit.max(-1)[1]

            display = random.randrange(0, 100) == 0
            dist, length = get_distance(target, y_hat, display=display, train=False)
            total_dist += dist
            total_length += length
            total_sent_num += target.size(0)

    logger.info('evaluate() completed')
    return total_dist / total_length

if __name__ == '__main__':
    logger.info("test.py start")
    os.environ["CUDA_LAUNCH_BLOCKING"] = "1"
    logger.info("device : %s" % torch.cuda.get_device_name(0))
    logger.info("CUDA is available : %s" % (torch.cuda.is_available()))
    logger.info("CUDA version : %s" % (torch.version.cuda))
    logger.info("PyTorch version : %s" % (torch.__version__))
    device = torch.device('cuda')

    hparams = HyperParams()
    hparams.log_hparams()

    criterion = nn.CrossEntropyLoss(reduction='sum', ignore_index=PAD_token).to(device)
    model = load_model("./weight_file/epoch2.pt")

    audio_paths, label_paths = load_data_list(data_list_path=TEST_LIST_PATH, dataset_path=DATASET_PATH)

    logger.info("load all target dictionary for reducing disk I/O")
    target_dict = load_targets(label_paths)
    logger.info("dump all target dictionary using pickle")
    with open("./pickle/target_dict_test.txt", "wb") as f:
        pickle.dump(target_dict, f)
    logger.info("dump all target dictionary using pickle complete !!")

    logger.info('start')

    test_dataset = BaseDataset(audio_paths=audio_paths[:],
                               label_paths=label_paths[:],
                               bos_id=SOS_token, eos_id=EOS_token, target_dict=target_dict,
                               input_reverse=hparams.input_reverse, use_augmentation=False)

    test_queue = queue.Queue(hparams.worker_num * 2)
    test_loader = BaseDataLoader(test_dataset, test_queue, hparams.batch_size, 0)
    test_loader.start()

    test_loss, test_cer = test(model, test_queue, criterion, device)
    logger.info('200h Test Set CER : %s' % test_cer)