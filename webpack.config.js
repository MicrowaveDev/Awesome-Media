'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
require('es6-promise').polyfill();

//NODE_ENV=production webpack

var config = {
    context: __dirname,
    entry: {
        polyfills: './public/frontend-app/polyfills.js',
        app: './public/frontend-app/main.js',
        styles: './public/scss/main.scss'
    },
    output: {
        filename: '[name].min.js',
        path: './public/build',
        library: '[name]'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        //http://projects.theforeman.org/issues/16599
        //new webpack.optimize.UglifyJsPlugin({
        //   compress: { warnings: false }
        //}),
        //new UnminifiedWebpackPlugin()
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./public/scss")]
    },

    devtool: 'source-map'
};

module.exports = config;