/* ./webpack.config.js */

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginConfig = new ExtractTextPlugin({
		filename: "./style/style.css"
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.svg$/, loader: 'file-loader', exclude: /node_modules/, include: path.join(__dirname, './src') },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract(
          { fallback: "style-loader",
            use: "css-loader"
          }
        )
			},
    ]
  },
  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
}
