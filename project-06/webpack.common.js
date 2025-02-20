const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.js'),
		test: path.resolve(__dirname, 'src/js/test-module.js'),
	},
	optimization: {splitChunks: {chunks: 'all'}},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devServer: {
		static: {directory: path.resolve(__dirname, 'dist')},
		port: 3000, open: true, hot: true, compress: true, historyApiFallback: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'RxJs with Webpack',
			filename: 'index.html',
			template: 'src/template.html'
		})
	]
};
