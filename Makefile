install:
	npm install

lint:
	# npx stylelint ./src/scss/*.scss
	npx stylelint ./app/scss/**/*.scss
	npx htmlhint ./app/*.html

deploy:
	npx surge ./src/

convertstyles:
	sass ./src/scss/app.scss ./src/css/main.css