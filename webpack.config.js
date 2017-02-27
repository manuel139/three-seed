const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, pkg.config.build),
    filename: '[name].[hash].js'
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      },{
        test: /\.(jpe?g|png|gif|svg|json)$/i,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({'title': pkg.config.title})
  ]
}
