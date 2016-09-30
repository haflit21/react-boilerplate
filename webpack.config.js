var webpack = require("webpack");
var config  = require("./config.json");

module.exports = {
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      query:
      {
        presets:['react']
      },
      exclude: /node_modules/
    }]
  },
  output: {
    filename: config.webpack.filename
  },
  devtool : "source-map"
};