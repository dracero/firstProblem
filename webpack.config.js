var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3080',
    'webpack/hot/only-dev-server',
    __dirname+'/client/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
 },
resolve: {
    extensions: ['*', '.js', '.jsx']
  },
node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
},
  output: {
    path: __dirname+'/client',
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: __dirname+'/client',
    hot: true,

  },
};
