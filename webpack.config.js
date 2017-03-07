var path = require('path');
var webpack = require('webpack');

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
    new webpack.optimize.UglifyJsPlugin()
  ] :
  [ new webpack.HotModuleReplacementPlugin() ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
)
const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]--[local]';
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
        loaders:  ['style-loader', `css-loader?localIdentName=${cssIdentifier}`],
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
