'use strict';
var entries = {
    'main': './ts/main.ts',
    'read_module': './ts/read_module/main.ts'
}
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
        extensions: ['', '.js', '.jsx']
    },
};
