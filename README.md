interactive-esl-tests
=====================

#### Config
```
// decrypt the config (ask someone for key)
openssl enc -des3 -d -in development.json.enc -out development.json

// use your unix username
sed s/\<username\>/$(whoami)/ config/development.json > config/development.json

// if you want to update config then make the canges to development.json
// then do
openssl enc -des3 -in development.json -out development.json.enc
// enter the key and commit
```

#### Setting up postgres

1. brew install postgres
2. npm install
3. postgres -D /usr/local/var/postgres
4. `cd config`
5. `// decrypt the config (ask someone for key)
openssl enc -des3 -d -in development.json.enc -out development.json`
6. `sed s/\<username\>/$(whoami)/ config/development.json > config/development_1.json; mv config/development_1.json config/development.json`
7. `createuser USERNAME // use your unix username here`
8. `./node_modules/migrate/bin/migrate`

#### Setting up project
1. npm install
2. grunt
3. go to `http://localhost:3009`
