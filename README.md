interactive-esl-tests
=====================

#### Config
to decrypt and setup config files run `make setup` (ask someone for key)

to edit config modify `config/development_template.json` and run `make encrypt` using the same key


#### Setting up postgres

1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. `createuser USERNAME // use your unix username here`

#### Setting up project
1. npm install
2. grunt
3. go to `http://localhost:3009`
