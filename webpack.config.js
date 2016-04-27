'use strict';

var fs = require('fs'),
    path = require('path');

var entries = {}
var read = function(cur) {
    var files = fs.readdirSync(cur);
    files.map(function(file_or_dir) {
        return path.join(cur, file_or_dir);
    }).forEach(function(file_or_dir) {
        if (fs.statSync(file_or_dir).isFile()) {
            if (file_or_dir.endsWith('main.ts') || file_or_dir.endsWith('main.tsx')) {
                var filePath = file_or_dir;
                var dir = filePath.split('/');
                var name = dir[dir.length - 2];

                entries[name] = './' + filePath;
            }
        } else {
            read(file_or_dir);
        }
    });
};

read('ts');
console.log("\x1b[36m--- Entries ---\x1b[0m");
console.log(entries);
console.log("\x1b[36m---------------\x1b[0m");

module.exports = {
    entry: entries,
    output: {
        path: './out',
        filename: "[name].bundle.js",
    },
    devtool: "sourcemap",
    debug: true,
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.css$/, loaders: ["style", "css"] },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            './ts/import_js'
        ]
    },
};
