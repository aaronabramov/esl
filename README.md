interactive-esl-tests
=====================

#### Config
```
sed s/\<username\>/$(whoami)/ config/development.json.sample > config/development.json
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
