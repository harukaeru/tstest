'use strict';
module.exports = {
    entry: {
        'main': './ts/main.ts'
    },
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
        extensions: ['', '.js', '.jsx']
    },
};
