var path = require('path');

// variables
var sourcePath = path.join(__dirname, '../../src');
var outPath = path.join(__dirname, '../../dist');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    app: './main.tsx'
  },
  output: {
    path: outPath,
    publicPath: '/'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      app: path.resolve(__dirname, '../../src/app/'),
      beans: path.resolve(__dirname, '../../src/beans/'),
      utils: path.resolve(__dirname, '../../src/utils/'),
      constants: path.resolve(__dirname, '../../src/constants/'),
      assets: path.resolve(__dirname, '../../src/assets/'),
      data: path.resolve(__dirname, '../../src/data/')
    }
  },
  module: {
    rules: [
      {test: /\.html$/, use: 'html-loader'},
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: 'assets/svg/[name].[ext]',
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'assets/fonts/[name].[ext]',
              mimetype: 'font/woff2'
            }
          }
        ]
      },
      {
        test: /\.(eot)$/,
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: 'assets/fonts/[name].[ext]',
              mimetype: 'font/eot'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 8
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        }
      }
    },
    runtimeChunk: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      inject: true
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty'
  }
};
