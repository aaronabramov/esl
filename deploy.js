var Kirov = require('kirov'),
    k = new Kirov;

k.username('dmitriiabramov');
k.host('rheia.us');
k.exec('rm -rf esl');
k.exec('mkdir esl');
k.exec('git clone https://github.com/dmitriiabramov/esl.git esl');
k.exec('cd esl && npm install');
k.exec('cd esl && make build');
k.exec('cd esl && ./node_modules/forever/bin/forever start run.js');

