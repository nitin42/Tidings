const webpack = require('webpack');
const {resolve, join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const VENDOR_LIBS = [
  'apiai', 'bulma', 'halogen', 'react', 'react-dom', 'redux', 'react-router',
  'react-delay-render', 'react-progressive-image', 'react-redux', 'redux-thunk',
  'styled-components', 'superagent', 'moment-timezone'
]

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: {
    main: resolve(__dirname, 'src/index.js'),
    vendor: VENDOR_LIBS
  },

  output: {
    filename: '[chunkhash].[name].js',
    path: resolve(__dirname, 'build'),
    publicPath: ASSET_PATH
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'style-loader!css-loader?sourceMap!postcss-loader'
        }),
        include: /node_modules/
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: /node_modules/
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  resolve: {
          alias: {
              'react-redux': join(__dirname, '/node_modules/react-redux/dist/react-redux.min')
          }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    require('autoprefixer'),
//     new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],

      // Check if the vendor dependencies present in the array declared are in node_modules folder or not
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ASSET_PATH: JSON.stringify(ASSET_PATH)
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
