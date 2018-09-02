const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildCssPath = new MiniCssExtractPlugin({
  filename: '[name][hash].css',
  chunkFilename: '[id][hash].css'
});
const hmr = new webpack.HotModuleReplacementPlugin();
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: '8080',
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  import: false,
                  url: false,
                  sourceMap: true
              }
          },
          {
              loader: "postcss-loader",
              options: {
                  sourceMap: true
              }
          },
          {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
          }
        ]
      }
    ]
  },
  plugins: [
    buildCssPath,
    hmr
  ]
});
