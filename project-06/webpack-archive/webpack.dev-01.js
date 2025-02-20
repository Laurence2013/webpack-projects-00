const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === 'development';

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
				devMode ? 'style-loader' : miniCssExtractPlugin.loader,
				'css-loader', 
				'postcss-loader', 
				'sass-loader']}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'RxJs with Webpack',
			filename: 'index.html',
			template: 'src/template.html'
		})
	].concat(devMode ? [] : [new miniCssExtractPlugin()])
};
