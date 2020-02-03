const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: './app/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'

  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ]
};