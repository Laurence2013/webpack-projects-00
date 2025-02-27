const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{test: /\.scss$/, use: [
				{loader: 'style-loader', options: {injectType: 'styleTag'}}, 
				{loader: 'css-loader', options: {sourceMap: true}}, 
				{loader: 'postcss-loader', options: {sourceMap: true}}, 
				{loader: 'sass-loader', options: {sourceMap: true}}, 
			]}
		],
	},
});
