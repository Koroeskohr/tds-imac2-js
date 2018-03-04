const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const libraryName = pkg.name

const plugins = [
  new ExtractTextPlugin({
    filename: './bundle.css',
    allChunks: true
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
]

const config = {
  entry: [
    path.resolve(__dirname, './src/index.js'),
    path.resolve(__dirname, './styles/app.css')
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1'
        })
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
}

module.exports = config
