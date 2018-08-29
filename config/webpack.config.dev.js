const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 5000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})