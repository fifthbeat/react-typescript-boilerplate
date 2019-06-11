const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

// plugins
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var WorkboxPlugin = require('workbox-webpack-plugin');

var outPath = path.join(__dirname, '../../dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    publicPath: './',
    filename: '[name].[hash:8].js',
    path: outPath
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[hash:8].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
