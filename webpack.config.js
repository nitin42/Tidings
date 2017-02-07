const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
};
