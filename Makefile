setup:
	openssl enc -des3 -d -in config/development.json.enc -out config/development_template.json
	sed s/\<username\>/`whoami`/ config/development_template.json > config/development.json

encrypt:
	openssl enc -des3 -in config/development_template.json -out config/development.json.enc
