const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry:  {
		bundle: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js',
		clean: true
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3000, open: true, hot: true, compress: true, historyApiFallback: true
	},
	resolve: {
		alias: {
			'rxjs': path.resolve(__dirname, 'node_modules/rxjs')
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'RxJs with Webpack',
			filename: 'index.html',
			template: 'src/template.html'
		})
	]
};
