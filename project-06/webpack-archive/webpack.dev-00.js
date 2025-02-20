const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js')
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devServer: {
		static: {directory: path.resolve(__dirname, 'dist')},
		port: 3000, open: true, hot: true, compress: true, historyApiFallback: true
	},
	module: {
		rules: [
			{test: /\.m?js$/, exclude: /node_modules/, use: {loader: "babel-loader", options: { presets: ['@babel/preset-env'] }}},
			{test: /\.scss$/, use: [
				//{loader: 'style-loader', options: {injectType: 'styleTag'}}, 
				{loader: 'css-loader', options: {sourceMap: true}}, 
				{loader: 'postcss-loader', options: {sourceMap: true}}, 
				{loader: 'sass-loader', options: {sourceMap: true}}, 
			]}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'RxJs with Webpack',
			filename: 'index.html',
			template: 'src/template.html'
		})
	]
};
