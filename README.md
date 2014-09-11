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

#### DB
postgres

```
brew install postgres
postgres -D /usr/local/var/postgres
./node_modules/migrate/bin/migrate
```


1. npm install
2. grunt
3. go to `http://localhost:3009`
