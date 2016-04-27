# Build Environment
## Install TypeScript (Required)
```sh
$ npm install -g webpack  # Install "webpack" (this is a TaskRunner)
$ npm install -g typescript  # Install "Typescript" globally
$ npm install .  # Install "ts-loader" locally(in package.json)
```

## Install File Monitor Tool Written In Python (Recommend)
```sh
$ pip install -r requirements.txt  # Install "when-changed"
```

## How To Run
```sh
$ npm run out  # Watch *.ts or *.tsx files and if changed codes, compile to *.js files automatically (See package.json and webpack.config.js)
$ npm run watch-changed # Watch ./out/*.js and if changed codes, run *.js automatically
```
