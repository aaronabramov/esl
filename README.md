interactive-esl-tests
=====================

#### Config
to decrypt and setup config files run `make setup` (ask someone for key)

to edit config modify `config/{config_name}_template.json` and run `make encrypt CONFIG_NAME={config_name}` using the same key


#### Setting up postgres

1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. `createuser USERNAME // use your unix username here`

#### Database migrations
`./node_modules/sequelize-cli/bin/sequelize db:migrate`
`./node_modules/sequelize-cli/bin/sequelize db:undo`

#### Setting up project
1. npm install
2. grunt
3. go to `http://localhost:3009`
