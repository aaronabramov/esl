interactive-esl-tests
=====================

#### Initial Setup

1. Set up Node (see below)
2. `make setup` (ask someone for key)
3. Add the following line to `/etc/hosts/`: `127.0.0.1       localhost       local.esl.com`
4. Set up postgres (see below)
5. Start postgres `postgres -D /usr/local/var/postgres`
6. While postgres is running, perform migrations `make migrate`
7. `npm install -g grunt`
8. `npm install -g grunt-cli`
9. Open new shell and start the web server: `grunt`
10. Go to http://local.esl.com:3009

### Setting up Node
1. Install nvm from [here](https://github.com/creationix/nvm).
2. `nvm install 0.10.30`
3. `nvm use 0.10.30`
4. Add `source ~/.nvm/nvm.sh` to your ~/.profile (load nvm when you open a shell)
5. Add `nvm use 0.10.30` to your ~/.profile (load the correct version of Node automatically when you open a shell)

#### Setting up postgres
1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. In psql, `create database esl_development;`

###### If things aren't working with your user
1. In a new shell, start psql `psql --username=<USERNAME> -d template1` // use unix username
2. In psql, `create database <USERNAME>;` // use unix username

#### Config
to decrypt and setup config files run `make setup` (ask someone for key)

to edit config:
* modify `config/{config_name}_template.json`
* run `make encrypt CONFIG_NAME={config_name}` using the same key

#### Database migrations
`make migrate` // migrate the database

`make rollback`

`./node_modules/sequelize-cli/bin/sequelize migration:create --name <TABLE_NAME>`

`drop database esl_development;`

`create database esl_development;`

#### ORM
```javascript
var models = require('./models');
models.users.create({facebook_id: '12345'}).complete(function(err, user) { ... });
```

#### Running
1. npm install
2. `nvm use 0.10.30`
3. Open new shell and start postgres: `postgres -D /usr/local/var/postgres`
4. Open new shell and start the web server: `grunt`
5. go to `http://localhost:3009`
