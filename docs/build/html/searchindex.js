Search.setIndex({docnames:["Checkpoint","Config","Dataset","Evaluator","Feature","Loader","Loss","Models","Trainer","Utils","index","notes/Data-Analysis","notes/More-details","notes/Preparation","notes/intro"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["Checkpoint.rst","Config.rst","Dataset.rst","Evaluator.rst","Feature.rst","Loader.rst","Loss.rst","Models.rst","Trainer.rst","Utils.rst","index.rst","notes\\Data-Analysis.md","notes\\More-details.md","notes\\Preparation.md","notes\\intro.md"],objects:{"models.attention":{MultiHeadAttention:[7,1,1,""]},"models.attention.MultiHeadAttention":{forward:[7,2,1,""]},"models.beam":{Beam:[7,1,1,""]},"models.beam.Beam":{search:[7,2,1,""]},"models.listenAttendSpell":{ListenAttendSpell:[7,1,1,""]},"models.listenAttendSpell.ListenAttendSpell":{forward:[7,2,1,""]},"models.listener":{Listener:[7,1,1,""],PyramidalRNN:[7,1,1,""]},"models.listener.Listener":{flatten_parameters:[7,2,1,""],forward:[7,2,1,""]},"models.listener.PyramidalRNN":{forward:[7,2,1,""]},"models.speller":{Speller:[7,1,1,""]},"models.speller.Speller":{forward:[7,2,1,""]},"package":{checkpoint:[0,0,0,"-"],config:[1,0,0,"-"],dataset:[2,0,0,"-"],evaluator:[3,0,0,"-"],feature:[4,0,0,"-"],loader:[5,0,0,"-"],loss:[6,0,0,"-"],trainer:[8,0,0,"-"],utils:[9,0,0,"-"]},"package.checkpoint":{CheckPoint:[0,1,1,""]},"package.config":{Config:[1,1,1,""]},"package.config.Config":{print_log:[1,2,1,""]},"package.dataset":{BaseDataset:[2,1,1,""],split_dataset:[2,3,1,""]},"package.dataset.BaseDataset":{augmentation:[2,2,1,""],batch_shuffle:[2,2,1,""],shuffle:[2,2,1,""],sort_by_length:[2,2,1,""]},"package.evaluator":{evaluate:[3,3,1,""]},"package.feature":{get_librosa_melspectrogram:[4,3,1,""],get_librosa_mfcc:[4,3,1,""],spec_augment:[4,3,1,""]},"package.loader":{BaseDataLoader:[5,1,1,""],MultiLoader:[5,1,1,""],load_data_list:[5,3,1,""],load_label:[5,3,1,""],load_pickle:[5,3,1,""],load_targets:[5,3,1,""]},"package.loader.BaseDataLoader":{run:[5,2,1,""]},"package.loss":{LabelSmoothingLoss:[6,1,1,""]},"package.loss.LabelSmoothingLoss":{forward:[6,2,1,""]},"package.trainer":{get_lr:[8,3,1,""],set_lr:[8,3,1,""],supervised_train:[8,3,1,""]},"package.utils":{char_distance:[9,3,1,""],get_distance:[9,3,1,""],get_label:[9,3,1,""],label_to_string:[9,3,1,""],save_epoch_result:[9,3,1,""],save_pickle:[9,3,1,""],save_step_result:[9,3,1,""]},models:{attention:[7,0,0,"-"],beam:[7,0,0,"-"],listenAttendSpell:[7,0,0,"-"],listener:[7,0,0,"-"],speller:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"000\uac1c\uc529\uc758":13,"000\uc2dc\uac04":13,"000\uc2dc\uac04\uc758":12,"000\uc5ec\uba85\uc774":13,"029e":4,"040\uac1c\uc758":[12,13],"058e":4,"066e":4,"092\uac1c\uc774\ubbc0\ub85c":11,"096e":4,"1000h":14,"101e":4,"105e":4,"109e":4,"10m":[4,12],"116e":4,"123gb\ub85c":13,"124\uac1c\uc758":13,"15m":4,"162e":4,"16k":12,"1\ubc88\ub9cc":13,"1\ubc88\ubd80\ud130":13,"1\ubc88\uc529":13,"208e":4,"20\uc2dc\uac04\uc744":13,"20h":[12,13],"229e":4,"25m":[4,12],"28607\uac1c\ub85c":11,"297\uac1c\ub294":13,"297\uac1c\ub85c":13,"2\uac1c\uc758":11,"300\uac1c":13,"300\uc5ec\uac1c\uc758":13,"332e":4,"340\uac1c\uc758":12,"3\uac1c\uc758":13,"3\ud559\ub144":13,"421e":4,"500e":4,"543e":4,"548e":4,"561e":4,"5\uac1c\uc758":13,"607\uac1c\uc758":11,"60\ub9cc\uac1c\uac00":13,"60\ub9cc\uac1c\uc758":11,"622545\ubc88\uae4c\uc9c0":13,"633e":4,"668e":4,"716e":4,"787e":4,"864e":4,"891e":4,"931e":4,"944e":4,"980\uc2dc\uac04\uc744":13,"980h":[12,13],"986e":4,"\uac00":13,"\uac00\uaca9\uc5d0":11,"\uac00\uc11c":11,"\uac00\uc131\ube44\uac00":11,"\uac00\uc838\uc640\uc8fc\ub294":13,"\uac01":13,"\uac01\uac01\uc758":11,"\uac04\ud22c\uc5b4":[12,13],"\uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4":13,"\uac17":13,"\uac19\ub2e4":13,"\uac19\uc740":[11,13],"\uac19\uc774":13,"\uac1c\uc218\ub294":13,"\uac1c\uc218\ub97c":11,"\uac1c\uc218\uc758":13,"\uac1c\uc758":13,"\uac70\uae30":11,"\uac70\ucce4\ub2e4":13,"\uac74\uac00":13,"\uac81\ub098":11,"\uac83\uc740":11,"\uac83\uc744":[11,13],"\uac83\uc774":13,"\uac83\uc774\uae30":13,"\uac83\uc774\ub2e4":13,"\uac83\uc774\ub77c\uace0":13,"\uac83\uc785\ub2c8\ub2e4":11,"\uacb0\uacfc":[11,13],"\uacb0\uacfc\ub97c":11,"\uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4":11,"\uacbd\ub85c\ub97c":13,"\uacc4\uc0b0\ud574\uc8fc\uace0":13,"\uacc4\uc18d":11,"\uace0\ubbfc\ud588\ub2e4":13,"\uacfc\uc815":13,"\uacfc\uc815\uc744":13,"\uad00\ub828":11,"\uad00\uc2ec\uc788\uc5c8\ub358":11,"\uad1e":13,"\uad6c\ubd84\ud574\uc8fc\uc5c8\ub2e4":13,"\uad6c\uc131\ub418\uc5b4":13,"\uad6c\uc131\ud588\ub2e4":13,"\uad6d\uac00\uc7a5\ud559\uae08":13,"\uadf8":[11,12,13],"\uadf8\ub798":11,"\uadf8\ub798\uc11c":13,"\uadf8\ub7ec\uae30":13,"\uadf8\ub7fc":13,"\uadf8\ub824\ubd24\uc2b5\ub2c8\ub2e4":11,"\uadf8\ub9ac\uace0":[11,13],"\uadfc\ub370":[11,13],"\uae00\uc740":13,"\uae00\uc785\ub2c8\ub2e4":13,"\uae00\uc790\ub97c":11,"\uae03":13,"\uae30\ub85d\ud55c":13,"\uae30\ubcf8":13,"\uae30\ubcf8\uc801\uc73c\ub85c":13,"\uae30\uc874":[11,13],"\uae30\uc900\uc73c\ub85c":11,"\uae38\uc774\uac00":11,"\uae38\uc774\ub97c":11,"\uae4c\uc9c0\ub294":13,"\uae4c\uc9c0\uc758":13,"\uaf2d":13,"\ub098\ub234\uc2b5\ub2c8\ub2e4":11,"\ub098\ub3c4":11,"\ub098\uba38\uc9c0":13,"\ub098\uc744":13,"\ub0b4\uc6a9\uc744":11,"\ub108\ubb34":11,"\ub118\ub294":13,"\ub118\uc5b4\uac00\ub294":11,"\ub123\uc5b4\uc900\ub2e4":13,"\ub123\uc5c8\uc73c\ubbc0\ub85c":13,"\ub178\uc774\uc988":13,"\ub178\uc774\uc988\uac00":13,"\ub180":11,"\ub2e4\ub154\ub358":13,"\ub2e4\ub8e8\uae30":11,"\ub2e4\uc2dc":13,"\ub2e4\uc6b4\ub85c\ub4dc":13,"\ub2e4\uc6b4\ubc1b\uc544\uc11c":11,"\ub2e4\uc74c":[11,13],"\ub2e4\uc74c\uacfc":[11,13],"\ub2e4\uc74c\uc73c\ub85c":[11,13],"\ub2e4\uc74c\uc740":13,"\ub2e8\uc704\ub85c":13,"\ub300\ud558\uc5ec":13,"\ub300\ud55c":13,"\ub300\ud574":13,"\ub354":13,"\ub354\ub4ec\ub294":13,"\ub370\uc774\ud130":[11,12,13],"\ub370\uc774\ud130\ub294":[11,13],"\ub370\uc774\ud130\ub85c":[11,13],"\ub370\uc774\ud130\ub97c":11,"\ub370\uc774\ud130\uc14b\uc5d0":13,"\ub370\uc774\ud130\uc14b\uc5d0\uc11c":[12,13],"\ub370\uc774\ud130\uc14b\uc758":13,"\ub370\uc774\ud130\uc14b\uc774":13,"\ub370\uc774\ud130\uc758":11,"\ub3c4\uc911":11,"\ub418\uac8c":11,"\ub418\ub294":13,"\ub418\uba74":13,"\ub418\uc5b4":13,"\ub418\uc5b4\uc788\ub358":11,"\ub418\uc5c8\ub2e4":13,"\ub418\uc5c8\uc744":11,"\ub41c":11,"\ub41c\ub2e4":13,"\ub420":13,"\ub454":13,"\ub458\uc774":11,"\ub458\uc774\ub9cc":11,"\ub4a4":13,"\ub4e4\uc5b4\ubcf4\uac8c":13,"\ub4f1":13,"\ub4f1\uc744":[12,13],"\ub4f1\uc758":[12,13],"\ub4f1\uc7a5\ud558\ub294":13,"\ub4f1\uc7a5\ud55c":[12,13],"\ub515\uc154\ub108\ub9ac":13,"\ub54c":13,"\ub54c\ubb38\uc5d0":[11,13],"\ub744\uc5b4\uc4f0\uae30\ub294":13,"\ub744\uc5b4\uc4f0\uae30\ub85c":13,"\ub79c\ub364\ud558\uac8c":13,"\ub808\uc774\ube14":[12,13],"\ub808\uc774\ube14\ub85c":13,"\ub808\uc774\ube14\ub85c\uc758":13,"\ub808\uc774\ube14\ub9c1":13,"\ub808\uc774\ube14\uc740":13,"\ub808\uc774\ube14\uc744":13,"\ub808\uc774\ube14\uc774":[11,13],"\ub85c":13,"\ub85c\ub4dc\ud558\uaca0\uc2b5\ub2c8\ub2e4":11,"\ub85c\ub529\ud558\uc9c0\ub9cc":11,"\ub97c":13,"\ub9ac\uc2a4\ud2b8":[12,13],"\ub9ac\uc2a4\ud2b8\ub85c":11,"\ub9ac\uc2a4\ud2b8\ub97c":13,"\ub9ac\uc2a4\ud2b8\uc5d0":[11,13],"\ub9c1\ud06c":13,"\ub9c1\ud06c\ub97c":13,"\ub9c1\ud06c\uc5d0\uc11c":13,"\ub9c8\uc9c0\ub9c9\uc5d0":13,"\ub9c8\ucce4\ub2e4":13,"\ub9cc":12,"\ub9cc\ub0ac\uc5c8\uc5b4":11,"\ub9cc\ub4dc\ub294":13,"\ub9cc\ub4e0":13,"\ub9cc\ub4e0\ub2e4":13,"\ub9cc\ub4e4\uace0":11,"\ub9cc\ub4e4\uc5b4":13,"\ub9cc\ub4e4\uc5b4\ub454":13,"\ub9cc\ub4e4\uc5b4\ubcf4\uc790":13,"\ub9cc\ub4e4\uc5b4\uc11c":11,"\ub9cc\ub4e4\uc5b4\uc900\ub2e4":13,"\ub9ce\ub2e4\uace0":11,"\ub9de\ucdb0\uc8fc\uae30":13,"\ub9de\ucdb0\uc8fc\ub294":13,"\ub9e4":11,"\uba3c\uc800":[11,13],"\uba54\uc11c\ub4dc\ub85c":13,"\ubaa8":[12,13],"\ubaa8\ub450":13,"\ubaa8\ub4e0":13,"\ubaa8\uc544\uc11c":13,"\ubaa9\ud45c\uc600\uae30\uc5d0":13,"\ubaac":[12,13],"\ubb34\uc2dc\ud558\uace0":13,"\ubb38\uc758\uc0ac\ud56d":13,"\ubb38\uc790":[12,13],"\ubb38\uc790\uac00":13,"\ubb38\uc790\ub294":13,"\ubb38\uc790\ub4e4\ub85c":13,"\ubb38\uc790\ub4e4\ub9cc":13,"\ubb38\uc790\ub4e4\uc740":[12,13],"\ubb38\uc790\ub4e4\uc774":13,"\ubb38\uc790\ub85c":13,"\ubb38\uc790\ub85c\ub9cc":13,"\ubb38\uc790\ub97c":13,"\ubb38\uc790\uc5d0":13,"\ubb38\uc7a5":13,"\ubb38\uc7a5\uc744":13,"\ubb38\uc81c\uac00":13,"\ubbf8\ub9ac":[11,13],"\ubc0f":13,"\ubc14":13,"\ubc14\uafb8\uc5b4":13,"\ubc14\uafd4\ubcf4\uc790":13,"\ubc14\uafd4\uc8fc\uae30\uac00":13,"\ubc14\uafd4\uc8fc\ub824":13,"\ubc14\uafd4\uc8fc\uc5c8\ub2e4":13,"\ubc14\ud0d5\uc73c\ub85c":11,"\ubc18\ud658\ud588\ub2e4":13,"\ubc1b\uc544":13,"\ubc1b\uc73c\uba74\uc11c":13,"\ubc1c\uc0dd\ud558\uc5ec":11,"\ubc1c\uc131\ud55c":13,"\ubc1c\uc74c\uc73c\ub85c":13,"\ubc1c\uc74c\uc804\uc0ac":[12,13],"\ubc1c\uc74c\uc804\uc0ac\ub97c":13,"\ubc30\uc6cc\ubd24\uc5b4":13,"\ubc31":13,"\ubc88":11,"\ubc88\ud638\ub294":13,"\ubc88\ud638\ub97c":13,"\ubc8c\ub2e4":13,"\ubc8c\uba74":13,"\ubcc0\uc218\ub97c":13,"\ubcc0\ud658":13,"\ubcc0\ud658\uae4c\uc9c0":13,"\ubcc0\ud658\ub418\uc5c8\ub294\uc9c0":13,"\ubcc0\ud658\ub41c":[12,13],"\ubcc0\ud658\uc744":13,"\ubcc0\ud658\uc774":11,"\ubcc0\ud658\ud574\ubcf4\uc790":13,"\ubcc0\ud658\ud574\uc8fc\uae30\ub9cc":13,"\ubcc0\ud658\ud574\uc8fc\ub294":13,"\ubcf4\uaca0\uc2b5\ub2c8\ub2e4":11,"\ubcf4\ub290\ub77c":11,"\ubcf4\uc2e4":11,"\ubcf4\uc558\uc2b5\ub2c8\ub2e4":11,"\ubcf4\uc774\uae34":13,"\ubcf8":13,"\ubd84\uc11d":11,"\ubd84\uc11d\uc744":11,"\ubd84\uc11d\ud558\uae30":11,"\ubd84\uc11d\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4":11,"\ubd88\ub7ec\uc624\uace0":13,"\ubd99\ub294":13,"\ube61\uc140\uac78":13,"\ube68\ub9ac":11,"\uc0ac\uc2ed":13,"\uc0ac\uc6a9":[12,13],"\uc0ac\uc6a9\ub41c":[12,13],"\uc0ac\uc6a9\ud55c":13,"\uc0ac\uc6a9\ud560":13,"\uc0ad\uc81c":[12,13],"\uc0bc":13,"\uc0bd\uc785\ud569\ub2c8\ub2e4":11,"\uc0c1\ub2f9\ud788":13,"\uc0c8\ub85c\uc6b4":11,"\uc0dd\uac01\ud588\uace0":13,"\uc0dd\uacbc\ub358":13,"\uc0dd\uae38":13,"\uc0dd\uc18c\ud55c":13,"\uc0fe":13,"\uc11e\uc5b4\uc8fc\uae30":13,"\uc11e\uc5b4\uc900\ub2e4":13,"\uc11e\uc5ec\uc9c4":13,"\uc120\uc218\uac00":11,"\uc120\uc218\ub97c":11,"\uc120\ud0dd\ud558\uae30":13,"\uc131\uacf5\uc801\uc73c\ub85c":11,"\uc138\ubc00\ud558\uac8c":13,"\uc18c\ub9ac":13,"\uc18c\ub9ac\uc57c":[12,13],"\uc218":[11,13],"\uc218\ub294":11,"\uc218\ub3d9\uc73c\ub85c":13,"\uc218\uc791\uc5c5\uc73c\ub85c":13,"\uc21c\uc11c\ub300\ub85c":13,"\uc21c\uc11c\ub85c":13,"\uc21c\uc11c\ub97c":13,"\uc22b\uc790":13,"\uc22b\uc790\ub07c\ub9ac\ub294":13,"\uc22b\uc790\ub808\uc774\ube14\ub85c":13,"\uc22b\uc790\ub808\uc774\ube14\uc5d0\uc11c":13,"\uc22b\uc790\ub85c":[11,13],"\uc22b\uc790\ub97c":13,"\uc27d\uac8c":11,"\uc2a4\ud06c\ub9bd\ud2b8":12,"\uc2dc\uac04\uc744":11,"\uc2dc\uc791\ub418\uba74":11,"\uc2dc\ud000\uc2a4":11,"\uc2dc\ud0ac":13,"\uc2dc\ud0ac\uc218\uac00":13,"\uc2e0\uccad":13,"\uc2e4\uc81c\ub85c":13,"\uc2e4\ud589\ub410\ub2e4\uba74":11,"\uc2e4\ud589\uc2dc\ucf1c\uc11c":13,"\uc2ed":[12,13],"\uc2fc":11,"\uc544":[12,13],"\uc544\ub798\ubd80\ud130":13,"\uc544\uc608":13,"\uc544\uc6c3\ub77c\uc774\uc5b4\ub85c":11,"\uc548\uc5d0":13,"\uc548\uc5d0\ub294":13,"\uc560\ub9e4\ud588\ub2e4":13,"\uc57d":[11,13],"\uc5b4":11,"\uc5b4\ub5a0\ud55c":13,"\uc5b8\uae09\ub41c":13,"\uc5c4\uccad\ub098\uac8c":11,"\uc5c6\uc5b4\uc11c":13,"\uc5c6\uc5c8\uc5b4":11,"\uc5c6\uc73c\ubbc0\ub85c":13,"\uc5d0":13,"\uc5d0\ub7ec":13,"\uc5d0\ub7ec\uac00":11,"\uc5d0\uc11c":[11,13],"\uc5ec\ub7ec":11,"\uc5f0\ub77d\uc8fc\uc2dc\uba74":13,"\uc624\uace0":11,"\uc624\ub514\uc624":13,"\uc640":13,"\uc644\uc131\ub418\uc5c8\ub2e4":13,"\uc644\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4":11,"\uc6b0\ub9ac":13,"\uc6b0\ub9ac\uac00":13,"\uc6b0\ub9ac\ub294":13,"\uc6b0\ub9ac\ub3c4":11,"\uc6d0\ub798":11,"\uc6d0\ud558\ub294":13,"\uc704":13,"\uc704\uc5d0\uc11c":13,"\uc704\uc640":13,"\uc704\uc758":[11,13],"\uc704\ud558\uc5ec":13,"\uc704\ud55c":13,"\uc704\ud574":[11,12,13],"\uc704\ud574\uc11c":13,"\uc73c\ub85c":13,"\uc744":13,"\uc74c\uc131":[12,13],"\uc74c\uc131\ub370\uc774\ud130":[12,13],"\uc74c\uc131\uc5d0":13,"\uc758":13,"\uc758\ubbf8\uac00":13,"\uc774":[11,12,13],"\uc774\uacf3":11,"\uc774\ub54c":13,"\uc774\ub7ec\ud55c":13,"\uc774\ub807\uac8c":13,"\uc774\ub85c\uc368":13,"\uc774\ub8e8\uc5b4\uc838":[11,13],"\uc774\ub8e8\uc5b4\uc9c0\ub294":13,"\uc774\ub8e8\uc5b4\uc9c4":13,"\uc774\ubc31":13,"\uc774\uc0c1":13,"\uc774\uc0c1\uc778":11,"\uc774\uc5d0":13,"\uc774\uc6a9\ud558\uc5ec":13,"\uc774\uc6a9\ud574\uc11c":13,"\uc774\uc81c":13,"\uc774\ud574\ud560":13,"\uc778\ub371\uc2a4\ub85c":12,"\uc77c":13,"\uc77c\uc815\ud55c":13,"\uc785\ub825\uc73c\ub85c":13,"\uc788\uac8c":13,"\uc788\uace0":13,"\uc788\ub294":13,"\uc788\ub294\uc9c0\ub97c":13,"\uc788\ub2e4":13,"\uc788\ub3c4\ub85d":13,"\uc788\uc2b5\ub2c8\ub2e4":[11,13],"\uc788\uc5c8\ub2e4":13,"\uc788\uc5c8\uc2b5\ub2c8\ub2e4":11,"\uc788\uc73c\ubbc0\ub85c":13,"\uc790\uc720\uc790\uc7ac\ub85c":13,"\uc791\uc5c5\uc5d0":13,"\uc791\uc5c5\uc740":13,"\uc791\uc5c5\uc758":13,"\uc791\uc5c5\ud588\uc2b5\ub2c8\ub2e4":13,"\uc798":13,"\uc7a1\uc544\uc8fc\ub294":13,"\uc7a1\uc74c":[12,13],"\uc800\uc7a5\uc2dc\ucf1c":11,"\uc800\uc7a5\uc744":11,"\uc800\uc7a5\ud55c\ub2e4":13,"\uc800\uc7a5\ud574\ub480\ub358":11,"\uc800\uc7a5\ud574\uc900\ub2e4":13,"\uc800\ud76c":11,"\uc800\ud76c\uac00":11,"\uc804\ucc98\ub9ac":13,"\uc804\ucc98\ub9ac\ub97c":13,"\uc804\uccb4":[12,13],"\uc815\ub2f5":12,"\uc815\ub3c4\ub97c":[11,13],"\uc815\ub3c4\uc758":11,"\uc815\uc0c1\uc801\uc73c\ub85c":[11,13],"\uc815\uc2e0\uc774":11,"\uc815\uc758\ud55c":13,"\uc815\uc758\ud574\ub454\ub2e4":13,"\uc815\uc758\ud574\ubcf4\uc790":13,"\uc815\uc758\ud574\uc8fc\uc5c8\ub2e4":13,"\uc815\uc758\ud588\ub2e4":13,"\uc815\uc758\ud588\uc2b5\ub2c8\ub2e4":11,"\uc815\ud655\ud558\uac8c":13,"\uc81c\uac70\ud55c":11,"\uc81c\uac70\ud574\uc900":13,"\uc81c\uacf5\ub418\ub294":13,"\uc81c\uacf5\ub41c":[12,13],"\uc81c\uacf5\ud558\ub294":13,"\uc81c\uacf5\ud55c":12,"\uc81c\uc678\ub97c":13,"\uc81c\uc678\ud55c":[12,13],"\uc870\uc6a9\ud55c":13,"\uc885\ub8cc\ub410\ub2e4\uba74":13,"\uc88b\uc544\ud588\uc5c8\uc5b4":11,"\uc8fc\ubaa9\ud588\ub2e4":13,"\uc900":13,"\uc904\uc774\uae30":11,"\uc904\uc77c":11,"\uc911":[12,13],"\uc918\uc57c":13,"\uc9c1\uc811":11,"\uc9c4\ud589\uc744":13,"\uc9c4\ud589\ud558\uae30":13,"\uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4":11,"\ucc28\ub9ac\uba74\uc740":11,"\ucc28\uc9c0\ud588\ub294\ub370":13,"\ucc38\uace0\ubc14\ub78d\ub2c8\ub2e4":13,"\ucc98\ub9ac":13,"\ucc98\ub9ac\ub97c":13,"\ucca0\uc790\uc804\uc0ac":[12,13],"\ucd1d":13,"\ucd5c\ub300\ud55c":13,"\ucd94\uac00":13,"\ucd94\uac00\ud574":13,"\uce58\ub300\uc796\uc544":11,"\uce60":[12,13],"\uce60\uc2ed":13,"\uce74\uc6b4\ud2b8\ud574":11,"\ucee4":13,"\ucef4\ud4e8\ud130\uac00":13,"\ucf54\ub4dc\uac00":11,"\ucf54\ub4dc\ub97c":13,"\ucf54\ub4dc\uc774\ub2e4":13,"\ud06c\uac8c":13,"\ud0c0\uac9f":13,"\ud14c\uc2a4\ud2b8":13,"\ud14c\uc2a4\ud2b8\ub370\uc774\ud130\ub85c":13,"\ud14c\uc2a4\ud2b8\uc6a9":[12,13],"\ud14d\uc2a4\ud2b8":13,"\ud14d\uc2a4\ud2b8\ub294":13,"\ud14d\uc2a4\ud2b8\ub85c":13,"\ud14d\uc2a4\ud2b8\ub85c\ub294":13,"\ud14d\uc2a4\ud2b8\ub85c\uc758":13,"\ud14d\uc2a4\ud2b8\ub97c":13,"\ud14d\uc2a4\ud2b8\uc5d0\uc11c":13,"\ud150\ub370":11,"\ud1b5\ud574\uc11c":[12,13],"\ud2b8\ub808\uc774\ub2dd":13,"\ud2b8\ub808\uc774\ub2dd\uc744":13,"\ud2b9\uc218":13,"\ud300\uc740":[11,13],"\ud30c\uc545\ub429\ub2c8\ub2e4":11,"\ud30c\uc545\ud574\uc57c\ud55c\ub2e4":13,"\ud30c\uc77c":[11,13],"\ud30c\uc77c\uacfc":13,"\ud30c\uc77c\ub4e4\ub85c\ub9cc":13,"\ud30c\uc77c\ub4e4\uc744":[11,13],"\ud30c\uc77c\ub85c":[11,13],"\ud30c\uc77c\uc740":[11,13],"\ud30c\uc77c\uc744":[11,13],"\ud30c\uc77c\uc758":13,"\ud30c\uc77c\uc774":13,"\ud310\ub2e8\ub418\uc5b4":11,"\ud310\ub2e8\ub429\ub2c8\ub2e4":11,"\ud310\ub2e8\ud55c":11,"\ud310\ub2e8\ud588\ub2e4":13,"\ud328\uc158\uc1fc":11,"\ud37c\uc13c\ud2b8":[12,13],"\ud37c\uc13c\ud2b8\uac00":13,"\ud3b8\uc758\ub97c":13,"\ud3ec\ub9f7\uc5d0":13,"\ud3ec\ub9f7\uc758":13,"\ud3ec\ud568\ub41c":13,"\ud3ec\ud568\ud558\uc5ec":13,"\ud3f4\ub354":13,"\ud3f4\ub354\uac00":13,"\ud3f4\ub354\ub85c":13,"\ud45c\uae30":13,"\ud45c\ucc98\ub7fc":13,"\ud45c\ud604":[12,13],"\ud53c\ud074":11,"\ud544\uc694\ud55c":13,"\ud544\ud130\ub9c1":13,"\ud544\ud130\ub9c1\ud574\uc8fc\ub294":13,"\ud558\ub098\uc758":13,"\ud558\ub098\ud558\ub098":13,"\ud558\ub294":13,"\ud558\ub294\ub370":13,"\ud558\uba74":13,"\ud558\uc2e4":13,"\ud559\ub144":13,"\ud559\uc2b5":[11,13],"\ud559\uc2b5\uc2dc\ub9c8\ub2e4":11,"\ud559\uc2b5\uc6a9":[12,13],"\ud559\uc2b5\uc744":13,"\ud559\uc2b5\uc774":11,"\ud559\uc2b5\ud558\ub294":13,"\ud55c\uad6d\uc5b4":[12,13],"\ud55c\uae00":13,"\ud55c\uae00\ub85c":[11,13],"\ud55c\ub2e4":13,"\ud55c\ubc88":11,"\ud560":13,"\ud568\uc218":13,"\ud568\uc218\ub4e4\uc744":13,"\ud568\uc218\ub97c":[11,13],"\ud568\uc218\uc774\ub2e4":13,"\ud574\ub2f9":[11,13],"\ud574\ub2f9\ud558\ub294":13,"\ud574\ub480\uc5c8\uc2b5\ub2c8\ub2e4":11,"\ud574\ubc84\ub9ac\uba74":13,"\ud574\ubcf4\uc790":13,"\ud574\uc11c":13,"\ud588\uc9c0\ub9cc":13,"\ud615\uc2dd\uc5d0":13,"\ud615\uc2dd\uc73c\ub85c":[11,13],"\ud615\ud0dc\ub85c":13,"\ud615\ud0dc\ub85c\uc758":13,"\ud655\ub960\uc774\ub77c\ub2c8":[12,13],"\ud655\uc778\uc744":13,"\ud655\uc778\ud558\uace0":13,"\ud655\uc778\ud558\uae30":13,"\ud655\uc778\ud560":11,"\ud655\uc778\ud574\ubcf8":13,"\ud655\uc778\ud574\ubd24\uc2b5\ub2c8\ub2e4":11,"\ud655\uc778\ud574\uc11c":13,"\ud655\uc778\ud588\ub2e4":13,"\ud658\uacbd\uc5d0\uc11c":13,"\ud658\uc601\ud569\ub2c8\ub2e4":13,"\ud6c4":13,"\ud6c4\uc5d0":13,"\ud6c8\ub828\ub370\uc774\ud130":13,"b\ub9cc\uc744":13,"break":[11,13],"char":[12,13],"class":[0,1,2,5,6,7],"csv\ud30c\uc77c\ub85c":11,"dataset\uc774":11,"default":[1,2,4,7,8,12],"dict\ub85c":13,"dict\ub97c":[11,13],"dict\uc640":13,"dict\uc778":11,"dictionary\ub97c":12,"float":[1,2,3,6,7,8,12],"function":[3,6,7,8],"hub\uc5d0\uc11c":[12,13],"id\ub85c":13,"id\ub97c":13,"import":[11,13,14],"int":[0,1,2,4,5,6,7,8,9,11,12,13],"labels\uc5d0":13,"lengths\ub77c\ub294":11,"new":[11,14],"num\uc73c\ub85c":13,"outlier\ub85c":11,"outlier\ub97c":11,"outlier\ub9cc\uc744":11,"outlier\uc774\uae30":11,"paths\ub97c":13,"paths\uc640":13,"plot\uc744":11,"return":[2,3,4,5,6,7,8,9,11,12,13],"scripts\uc5d0\ub294":11,"true":[1,2,4,7,12,13],"while":[6,7],For:14,IDs:7,LAS:[7,14],The:[0,1,5,7,8,12,14],Use:12,Used:7,Using:[12,13,14],With:[7,14],abov:14,abs:7,activ:5,affin:12,after:[1,14],afterward:[6,7],agre:14,aidata:13,aihub:13,aihub_label:13,algirithm:14,algorithm:[12,14],all:[6,7],allow:[0,1,7],alreadi:14,also:14,although:[6,7],amplitude_to_db:12,ani:[5,14],anoth:14,apach:14,append:[11,13],appli:[1,2,7,12],applic:14,appreci:14,appropri:14,architectur:[10,14],area:4,arg:[0,5],argument:5,arrai:[4,11,12],art:[7,14],arxiv:7,ascontiguousarrai:12,attend:[7,14],attent:[1,12,14],audio:[2,4,5,13,14],audio_path:[2,5,13],augment:[1,2,4,12,14],augment_ratio:[1,2],automat:[4,12,14],avoid:1,base:[5,12,14],base_path:13,basedataload:5,basedataset:[2,5],basi:14,batch:[0,1,2,5,7,12],batch_first:12,batch_shuffl:2,batch_siz:[0,1,2,5,7],batchnorm2d:12,becom:[1,7,12],befor:10,begin:4,being:[0,14],between:9,bia:12,bidirect:[1,7,12],bin:11,bit:14,blob:[4,12],bool:[1,2,4,7],bos:9,bos_id:9,bottom_rnn:12,box:11,boxplot:11,bracket:13,brain:[4,12],bug:14,build:14,calcul:[6,9],call:[0,6,7],callabl:5,can:14,care:[6,7],ceil_mod:12,cell:[1,7],cepstral:4,cer:[3,8,9,12],certain:1,ch_label:13,chakraborti:12,chan:12,char2id:[5,11,13],char_dist:9,char_list:13,charact:[3,5,7,8,9],charat:9,check:14,checkout:14,checkpoint:10,chorowski:12,classfic:6,clean_data:11,close:13,cluster:0,code:12,coeffici:4,collabor:14,com:[4,6,12,13,14],command:14,compil:13,complianc:14,comput:[4,6,7,14],concaten:12,conda:14,condit:14,confid:6,config:[0,2,8,10],configur:[1,2],constantli:14,constructor:5,contact:14,contain:[7,14],continu:13,conv2d:12,conv:12,convert:[7,9],copi:14,copyright:14,core:[1,5,8,12],correspond:14,cp949:[11,13],cpu:[1,3,5,8],creat:14,criterion:[3,8],crr:12,csv:[5,11,12,13],cuda:[1,3,8,11],cumul:7,current:[0,14],data:[0,1,2,4,5,14],data_list_path:5,data_path:13,datafram:[11,13],dataset:[4,5,10,14],dataset_list:5,dataset_path:5,decod:7,decoder_hidden:7,decoder_hidden_s:7,decoder_input:7,decoder_output:7,def:[11,12,13],defin:[6,7],definit:14,defulat:7,del_sil:[4,12],delet:4,delimit:11,demiseom:[4,12],descend:2,detail:[10,14],determin:8,develop:14,devic:[3,7,8],dict:[2,5,9,11,13],dictionari:[2,5,9,13],dilat:12,dim:[6,7],dimens:7,diment:6,directli:6,discuss:14,disk:0,displai:13,dist:9,distanc:[9,12],distribut:[6,7,14],doc:[3,8],docstr:14,document:14,drawn:7,drop_last:2,dropout:[1,7,12],dropout_p:7,dtype:12,dump:11,dure:[0,7],each:7,edit:12,effect:12,either:14,elif:[12,13],els:[7,12,13],embed:12,enabl:14,encod:[5,6,7,11,12,13],encoder_output:7,end:[2,4,7,9,12,13],english:14,enumer:13,environ:14,eos:[7,9],eos_id:[2,7,9,11],eos_token:[7,11],epoch:[0,1,8,9,12],eps:12,error:[3,8,12],especi:14,evalu:10,evalut:3,everi:[6,7],evolv:14,exampl:[0,4,7,13],except:[12,13,14],execut:11,expect:7,explan:14,express:14,extrem:1,fals:[1,2,4,7,11,12,13],fast:[7,14],feat:[4,7,12],feat_siz:12,featur:[1,2,7,10,14],feature_s:7,feedback:14,feel:14,fft:12,field:14,filanam:[12,13],file:[4,5,9,14],file_pad:13,filenam:[2,5,9,11,12,13],filenum:[12,13],filepath:[4,5,9,12,13],filter:[4,13],fix:14,flag:[1,2,4,7,12,13],flatten:7,flatten_paramet:7,floattensor:12,fname:13,follow:[0,14],forc:[1,7,8,12],format:[9,13],former:[6,7],forward:[6,7],frame:[4,12],free:14,freq:[4,12,13],freq_list:13,freq_mask_num:[4,12],frequenc:[4,12],frequent:14,from:[1,4,5,6,7,13],full:0,gener:[4,7,14],get:[7,8,13],get_dist:9,get_label:9,get_librosa_melspectrogram:[4,12],get_librosa_mfcc:4,get_lr:8,github:[4,6,12,13,14],given:7,gmail:[13,14],googl:[4,12],govern:14,ground:[6,9],gru:[7,12],ham:[4,12],hangeul:9,hardtanh:12,has:[6,14],have:14,head:[7,11],help:12,here:14,hidden:[1,7,12],hidden_s:[1,7],high:12,high_plateau_lr:1,higher:[7,14],hook:[6,7],hop:[4,12],hop_length:12,hoplength:4,hour:14,how:[4,8],hparam:14,html:[3,8],http:[3,4,6,7,8,12,13,14],hub:[4,12,13,14],hyper:4,hyperparam:2,hyperparamet:14,ibm:[12,14],id2char:[5,9,11,13],id_list:13,identif:[2,5,9],idx:13,ignor:[6,7],ignore_index:6,implement:14,impli:14,improv:14,in_featur:12,index:[6,7,11,13],indic:[1,2,4,7,12],infer:7,inform:[1,7],init_lr:1,initi:[0,1,7],inplac:12,input:[1,2,4,7,12],input_dropout:12,input_len:7,input_revers:[1,2,4,12],input_s:7,instanc:[6,7],instead:[6,7],integ:6,interdisciplinari:14,intro:10,invalid:12,invok:5,issu:[6,13,14],job:0,kai:[12,14],kaispeech:[11,12,13],kaispeech_000001:12,kaispeech_000002:12,kaispeech_001348:13,kaispeech_021458:4,kaispeech_622245:12,kaispeech_:13,kaispeech_label_000001:12,kaispeech_label_000002:12,kaispeech_label_622245:12,kaispeech_label_:13,kei:[7,11],kernel_s:12,keyword:5,kind:14,korean:[13,14],kwarg:5,label:[1,2,5,6,9,11],label_df:13,label_freq:13,label_list:13,label_path:[2,5,11],label_smooth:6,label_to_str:[9,11],labelsmoothingloss:6,labl:12,languag:14,later:0,latter:[6,7],law:14,layer:[7,12],layer_s:7,learn:[1,8,12],len:[11,13],length:[1,2,4,7,9,11,12,13],leran:1,level:[7,12],levenshtein:12,lib:14,librosa:[12,14],like:14,limit:[4,14],lin:12,linear:12,linguist:14,list:[2,3,5,7,8,9],listen:[1,14],listenattendspel:12,listener_layer_s:1,listener_output:7,littl:14,load:[0,1,5,11,12],load_data_list:5,load_label:[5,11,13],load_pickl:5,load_result:5,load_target:5,loader:10,log:[4,7,12],log_mel:[4,12],log_softmax:7,logarithm:6,logit:[6,7],loop:0,loss:[3,8,9,10],low:[7,12],low_plateau_lr:1,mai:[5,14],mainli:14,maintain:1,major:14,make:[0,4],manag:0,mani:[4,8],mask:[4,12],master:[3,4,8,12,13],match:2,matplotlib:11,max:[1,12],max_epoch:1,max_len:[1,7],max_val:12,maximum:[1,7],maxpool2d:12,mean:13,mechan:[1,7,12],mel:[4,12],mel_spectrogram:4,mel_typ:[4,12],melspectrogram:12,memmap:12,memori:11,messag:[5,9],met:7,method:[0,4,5,12,14],methodolog:14,mfcc:[4,12,14],middle_rnn:12,min_val:12,mini:[0,1,2,7,12],mode:12,model:[0,3,6,8,9,10,14],modifi:14,modul:[0,3,6,7,8],momentum:12,more:[10,14],multi:[5,7,12],multiheadattent:7,multiload:5,multipl:7,multistep:1,n_fft:12,n_head:7,n_layer:7,n_mel:[4,12],n_mfcc:4,need:[6,7],new_fnam:13,new_sent:13,next:11,nfft:4,nois:13,non_silence_indic:12,none:[0,2,7,9,11,13],note:10,num:[1,2],num_direct:7,num_lay:[7,12],number:[0,1,4,5,6,7,8,9,12],numpi:[11,14],object:[0,5,7],obtain:14,onc:7,one:[3,6,7,8],ongo:[7,12],onli:14,oom:11,open:[11,13,14],optim:[0,8],option:7,org:[3,7,8,12,14],our:14,out:[11,12],out_featur:12,outlier:11,output:[7,8,11,13],output_len:7,over:7,overlap:4,overrid:5,overridden:[6,7],pack:[1,2],pack_by_length:[1,2],packag:[0,1,2,3,4,5,6,8,9,10],pad:[12,13],page:14,panda:[11,13,14],paper:[7,14],paramet:[0,1,2,3,4,5,6,7,8,9,12],pass:[5,6,7],path:[2,4,5,9,11,13,14],pattern:13,pcm:[4,12,13],pep:14,perform:[6,7],permiss:14,phase:1,pickl:[1,5,9,11],pip:14,pleas:14,plstm:12,plt:11,point:6,pointer:7,possibl:14,predict:[7,9],prepar:10,present:[8,14],print:[1,5,13],print_log:1,print_time_step:8,prob:7,probabl:[1,6,7,8,12],problem:14,proce:14,process:[1,7],progress:[13,14],project:14,provid:[4,5,6,7,9],publish:14,pyplot:11,pyramid:[1,7,12],pyramidalrnn:[7,12],python:14,pytorch:[3,6,8,12,14],queri:7,question:14,queue:[0,3,5,8],rais:12,ramp:1,randint:12,random:[1,7,12,13],rang:12,rare:13,rare_in:13,rare_label:13,rate:[1,3,4,8,12],ratio:[1,2,6,12],raw:[12,13],raw_sent:13,read_csv:13,reader:11,readlin:13,recip:[6,7],recognit:[4,7,12,13],recommend:14,record:14,recurr:7,reduct:7,ref:12,refer:[3,4,6,7,8,10,12],regist:[6,7],report:14,repositori:13,repres:5,represent:9,request:14,requir:14,resolut:7,respect:5,result:[5,9],resum:0,revers:[1,2,4,12,13],rnn:[1,7,12],rnn_cell:7,root:12,row:11,run:[0,5,6,7,14],sampl:[4,7,12],save:[0,9],save_epoch_result:9,save_pickl:9,save_step_result:9,save_var:9,savepath:9,scale:4,score:7,script:11,seaborn:11,search:7,see:14,seed:1,seen:0,self:12,selfattent:12,sentenc:[7,9,11,12,13],sentence_mark:13,sentence_prob:7,seq2seq:[0,7,12,14],seq_len:[7,12],sequenc:[1,2,7,9,11,14],sequenti:[0,5,12],seri:4,set:[2,5,8,9,14],set_lr:8,setup:14,setuptool:14,sh951011:[13,14],shape:6,should:[6,7,14],show:11,shuffl:[2,13],signal:[7,12],silenc:4,silent:[6,7],similar:[1,2],simpl:[4,12,14],sinc:[6,7],size:[0,1,2,5,7,12],slow:1,small:14,smaller:7,smooth:[1,6,12],sns:11,soectrigram:4,softwar:14,soon:14,sort:[2,13],sort_by_length:2,sos:7,sos_id:[2,7,9],sos_token:7,sound:13,sourc:[0,1,2,3,4,5,6,7,8,9],spec:[1,2,4,12],spec_aug:[4,12],spec_augment_pytorch:4,specaug:[4,12,14],special:13,specif:[4,9,14],specifi:7,spectrogram:[4,12],speech:[4,7,12,13,14],spell:[7,14],speller:[1,12],speller_layer_s:[1,12],split:[2,11,12,13],split_dataset:2,spoken:14,standard:5,start:[2,7,9,12,13],state:[0,1,7,12,14],step:[1,8,9,12],store:[0,7],str:[4,5,7,9,11,13],stride:[4,12],string:9,strip:13,studi:14,sub:13,subclass:[5,6,7],subfield:14,sum:[6,11],supervised_train:8,support:14,suspend:0,swapax:12,symbol:7,take:[6,7],taken:5,target:[2,5,6,7,9,11],target_dict:[2,5,9,11],target_fnam:13,target_length:11,target_path:13,teacher:[1,7,8,12],teacher_forc:1,teacher_forcing_ratio:[7,8],team:4,techniqu:14,technolog:14,tensor:[4,6,7,9],termin:7,test1:13,test2:13,test:[5,12,13],test_data_list:13,test_df:13,test_dict:13,test_label:13,test_list:13,test_num:13,text:14,than:7,them:[3,6,7,8],thi:[5,6,7,14],thread:[3,5,8],thread_id:5,through:0,thruth:6,time:[0,4,7,9,12],time_mask_num:[4,12],time_step:0,to_csv:[11,13],togeth:13,token:[7,11],top:[7,14],top_db:12,top_rnn:12,torch:[0,3,4,6,7,8,9,12],total:9,total_dist:9,total_length:9,total_num:13,total_time_step:[0,8],tqdm:[13,14],track_running_stat:12,train:[0,2,5,7,8,9,10,11],train_batch_num:2,train_begin:8,train_data_list:13,train_dataset_list:[0,2],train_df:13,train_dict:13,train_ful:13,train_label:11,train_list:13,train_num:13,train_result:9,train_step_result:9,trainer:10,trang:13,translat:14,tree:13,truth:9,txt:[12,13,14],type:7,under:14,uniform:12,uniformli:7,unit:9,unless:14,updat:14,use:[1,2,7,12,14],use_attent:[1,7],use_aug:[1,2],use_beam_search:7,use_bidirect:[1,7],use_cuda:1,use_label_smooth:1,use_multistep_lr:1,use_pickl:1,use_pyramid:[1,7],used:[1,3,5,7,8,12],using:[0,5,14],utf:[5,11,13],util:[2,10],utter:7,valid:2,valid_dataset:[0,2],valid_ratio:2,valid_result:9,valu:[6,7,9,11],valueerror:12,variabl:7,version:14,virtual:14,virtualenv:14,vocab_s:[6,7],vocabulari:7,voic:[12,14],wait:14,want:14,warp:12,warranti:14,wav:12,websit:14,when:[0,6,7],whether:[1,2,4,7,12],which:[6,7,14],whose:7,wiki:[12,14],wikipedia:12,window:[4,12],within:[0,6,7],without:14,word:6,work:14,worker_num:[1,5,8],would:7,write:[0,13,14],written:14,www:[13,14],y_hat:[7,9],you:[5,14],your:14,zhouhan:12,zip:[11,13]},titles:["Checkpoint","Config","Dataset","Evaluator","Feature","Loader","Loss","Models","Trainer","Utils","Welcome to Korean Speech Recognition\u2019s documentation!","Data-Analysis","More Details","Preparation before Training","Intro"],titleterms:{"function":13,"new":13,analysi:11,architectur:12,attend:12,attent:7,base:13,beam:7,befor:[13,14],bracket_filt:13,charact:[12,13,14],checkpoint:0,code:14,config:1,contact:13,contribut:14,creat:13,crr:14,data:[11,12,13],dataset:[2,12],detail:12,document:10,evalu:3,featur:[4,12],filenum_pad:13,folder:12,format:12,from:14,get:14,get_path:13,hyperparamet:12,instal:14,intro:14,korean:10,label:[12,13],licens:14,list:[12,13],listen:[7,12],listenattendspel:7,loader:5,loss:6,member:12,model:[7,12],more:12,new_target_dict:11,prepar:[13,14],preprocess:[12,13],prerequisit:14,rate:14,recognit:[10,14],refer:14,roadmap:14,score:12,sentence_filt:13,sentence_to_target:13,sourc:14,specaugment:12,special_filt:13,speech:10,spell:12,speller:7,start:14,structur:[12,13],style:14,target:13,target_to_sent:13,team:12,test:14,text:13,train:[12,13,14],trainer:8,troubleshoot:14,util:9,welcom:10}})