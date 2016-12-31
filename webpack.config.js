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
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'angular2']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                keepQuery: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [path.resolve(__dirname, "./public/scss")]
                            }
                        }
                    ],
                })
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
        //http://projects.theforeman.org/issues/16599
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        }),
        new UnminifiedWebpackPlugin()
    ],

    devtool: 'source-map'
};

module.exports = config;