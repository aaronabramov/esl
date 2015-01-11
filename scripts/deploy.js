var SSH = require('ssh-kit'),
    ssh = new SSH();


// open stack host and username
ssh.set('username', 'dmitriiabramov');
ssh.set('host', 'turboenglish.net');
ssh.set('sshKey', '/home/ubuntu/.ssh/id_turboenglish.net');

// remove if exists
ssh.exec('rm -rf ~/esl_deploy_tmp');

// create dir
ssh.exec('mkdir -p ~/esl_deploy_tmp');

// clone master branch of the repo
ssh.exec('git clone git@github.com:dmitriiabramov/esl.git ~/esl_deploy_tmp');

// install packages
ssh.exec('cd ~/esl_deploy_tmp && npm install');

// if it exists and was deployed before then try to stop all forever daemons
ssh.exec('cd ~/esl_deploy_tmp && [ -f ./node_modules/forever/bin/forever ] && ./node_modules/forever/bin/forever stopall');

// remove previously deployed directory and rename current tmp
ssh.exec('rm -rf ~/esl');
ssh.exec('mv ~/esl_deploy_tmp ~/esl');

// link config directory
ssh.exec('rm -rf ~/esl/config && ln -s ~/esl_config ~/esl/config');

ssh.exec('cd ~/esl/ && ./node_modules/grunt-cli/bin/grunt browserify');

// and daemonize the process redirectiong STDOUT of the server to ~/out.log
ssh.exec('NODE_ENV=production cd ~/esl && ./node_modules/forever/bin/forever start -o ~/esl_out.log -e ~/esl_err.log ./run.js');
