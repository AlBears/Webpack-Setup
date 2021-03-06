var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION ?
  [ './src/index.js' ] :
  [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ];

var plugins = PRODUCTION ?
  [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles.css')
  ] :
  [ new webpack.HotModuleReplacementPlugin() ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
)
const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]--[local]';

const cssLoader = PRODUCTION ?
    ExtractTextPlugin.extract({
      loader: `css-loader?localIdentName=${cssIdentifier}`
    }) :
    ['style-loader', `css-loader?localIdentName=${cssIdentifier}`]


module.exports = {
  devtool: 'source-map',//devtool for debugging
  entry,
  plugins,
  module: {
    loaders:
    [
      {//load es 6
        test:     /\.js$/,
        loaders:  ['babel-loader'],
        exclude:  '/node_modules/'
      },
        {//load images
        test:     /\.(png|jpg|gif)$/,
        //return data url if file is smaller than 10kb
        loaders:  ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
        exclude:  '/node_modules/'
      },
      {//load styles css
        test:     /\.css$/,
        loaders:  cssLoader,
        exclude:  '/node_modules/'
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};
