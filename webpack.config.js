const webpack = require('webpack');
const path = require('path');

const config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client?http://localhost:3000/',
		path.join(__dirname, '/client/Route.jsx')
	],
	output: {
		path: path.resolve(__dirname, 'client', 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	node: {
      	child_process: 'empty',
      	fs: "empty",
      	net: "empty",
      	tls: "empty"
    },
  devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.(jsx|js)$/,
				loader: ['react-hot-loader', 'babel-loader'],
				exclude: [/node_modules/]
			},
			{
			  test: /\.css$/,
			  loader: 'style-loader!css-loader'
			},
			{
			 test: /\.(jpe?g|gif|png)$/,
			 loader: 'file-loader?emitFile=false&name=../assets/images/[name].[ext]'
			}
		]
	}
}

module.exports = config;
