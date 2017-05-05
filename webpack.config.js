const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development';
let config = {}
const entry = {
  entry: './src/app/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  }
}

const modules = {
  rules: [
    { test: /\.(js)$/, use: 'babel-loader' },
    { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
  ]
}

const devServer = {
  historyApiFallback: true,
  hot: true,
  port: 3000
}

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/app/index.html'
  }),
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.optimize.UglifyJsPlugin()
]

config = Object.assign(config, entry, { module: modules }, { plugins }, { devServer })

if (NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;