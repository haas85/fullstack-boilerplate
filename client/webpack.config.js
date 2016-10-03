var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
    // sourceMapFilename: "bundle.js.map",
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }],
    preLoaders: [
      {
        exclude: /node_modules/,
        loader: "eslint-loader",
        include: path.join(__dirname, 'src')
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
