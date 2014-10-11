interactive-esl-tests
=====================

#### Initial Setup

1. Install nvm
2. `nvm install 0.10.30`
3. `nvm use 0.10.30`
4. `make setup` (ask someone for key)
5. Add the following line to `/etc/hosts/`: `127.0.0.1       localhost       local.esl.com`
6. Set up postgres (see below)
7. Start postgres `postgres -D /usr/local/var/postgres`
8. While postgres is running, perform migrations `make migrate`
9. `npm install -g grunt`
10. `npm install -g grunt-cli`
11. Open new shell and start the web server: `grunt`
12. Go to http://local.esl.com:3009

#### Config
to decrypt and setup config files run `make setup` (ask someone for key)

to edit config:
* modify `config/{config_name}_template.json`
* run `make encrypt CONFIG_NAME={config_name}` using the same key

#### Setting up postgres
1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. In a new shell, start psql `psql --username=<USERNAME> -d template1` // use unix username
5. In psql, `create database <USERNAME>;` // use unix username
6. In psql, `create database esl_development;`

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
