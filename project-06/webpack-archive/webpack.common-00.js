const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: {
			import: path.resolve(__dirname, 'src/index.js'),
			dependOn: 'shared'
		},
		test: {
			import: path.resolve(__dirname, 'src/js/test-module.js'),
			dependOn: 'shared'
		},
		shared: 'rxjs'
	},
	optimization: {runtimeChunk: 'single'},
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
