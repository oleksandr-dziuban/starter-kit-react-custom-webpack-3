const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules,
  },
  devServer: {
    contentBase: './static',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new StyleLintPlugin({
      emitErrors: false,
      files: ['./src/**/*.js'],
    }),
    new HtmlWebpackPlugin({
      template: './static/index.html',
      files: {
        js: ['bundle.js'],
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
