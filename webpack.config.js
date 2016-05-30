var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './entry.js'
  ],

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 9000,
    hot: true
  },

  module: {
    loaders: [
      // javascript jsx loader
      { test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?' + JSON.stringify({presets: ['stage-2', 'es2015', 'react']})
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
