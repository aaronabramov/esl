clean:
	rm -rf ./public/scripts/*

build: clean
	cp -r ./src/* ./public/scripts
	cp -r ./vendor/* ./public/vendor
