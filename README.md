interactive-esl-tests
=====================

#### Initial Setup

1. `make setup` (ask someone for key)
2. Set up postgres (see below)
3. Add the following line to `/etc/hosts/`: `127.0.0.1       localhost       local.esl.com`
3. Start postgres `postgres -D /usr/local/var/postgres`
4. Perform migrations `make migrate`
5. Open new shell and start the web server: `grunt`
6. Go to http://local.esl.com:3009

#### Config
to decrypt and setup config files run `make setup` (ask someone for key)

to edit config modify `config/{config_name}_template.json` and run `make encrypt CONFIG_NAME={config_name}` using the same key


#### Setting up postgres

1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. `createuser USERNAME // use your unix username here`

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
2. Open new shell and start postgres: `postgres -D /usr/local/var/postgres`
2. Open new shell and start the web server: `grunt`
3. go to `http://localhost:3009`
