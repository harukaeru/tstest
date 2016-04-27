# Must Read me
## Required Environment
- Python 2.6 or later
- Node

## Target Users
- Mac OS X

## Others
I don't try on other machines. So if it doesn't work in your environment, please raise `Issues`.

# Versions
- TypeScript 1.8.10
- webpack 1.12.13
- when-changed 0.3.0

# Build Environment
## Install TypeScript, Webpack, and ts-loader (Required)
```sh
$ npm install -g webpack  # Install "webpack" (this is a TaskRunner)
$ npm install -g typescript  # Install "Typescript" globally
$ npm install .  # Install "ts-loader" locally(in package.json)
```

## Install File Monitor Tool Written In Python (Required. But if you don't want to use Python, use alternatives)
```sh
$ pip install -r requirements.txt  # Install "when-changed"
```

## How To Run
```sh
$ npm run out  # Watch *.ts or *.tsx files and if changed codes, compile to *.js files automatically (See package.json and webpack.config.js)
$ npm run run-all  # Run all js files
```

# Change Scripts Montior
```
$ npm run watch-changed # Watch ./out/*.js and if changed codes, run *.js automatically
```
