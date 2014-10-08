setup:
	$(MAKE) decrypt CONFIG_NAME=development
	# setup database config
	sed s/\<username\>/`whoami`/ config/config_template.json > config/config.json

decrypt:
	openssl enc -des3 -d -in config/$(CONFIG_NAME).json.enc -out config/$(CONFIG_NAME)_template.json
	sed s/\<username\>/`whoami`/ config/$(CONFIG_NAME)_template.json > config/$(CONFIG_NAME).json

encrypt:
	openssl enc -des3 -in config/$(CONFIG_NAME)_template.json -out config/$(CONFIG_NAME).json.enc

migrate:
	./node_modules/sequelize-cli/bin/sequelize db:migrate

rollback:
	./node_modules/sequelize-cli/bin/sequelize db:migrate:undo
