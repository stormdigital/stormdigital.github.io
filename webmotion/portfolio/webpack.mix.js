//Use 'npx mix' to build
//Use 'npx mix watch' to run a watch command
//Use http-server with your CD set to the /dist folder in order to generate a working preview (while npx mix watch is running on another terminal)


// webpack.mix.js
require('mix-html-builder');
require('laravel-mix-clean');
require('laravel-mix-polyfill');
const Dotenv = require('dotenv-webpack');

let mix = require('laravel-mix');

mix
.setPublicPath('dist')
.sass('./src/style.scss', './dist')
.js('./src/json/input.js', './dist/dataContent.js')
.js('./src/js/Draggable.min.js', './dist/Draggable.min.js')
.js('./src/js/main.js', './dist/main.js')
.copyDirectory('./src/images','./dist/images')
.html({
    inject: true,
    output: ''
})
.polyfill({
    enabled: false,
    useBuiltIns: "usage",
    targets: "> 0.25%, not dead",
    debug: true
})
.clean()
.webpackConfig({
    plugins:[
        new Dotenv()
    ]
})

