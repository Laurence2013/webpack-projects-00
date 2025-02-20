process.env.NODE_ENV === 'production' ? module.exports = {
	plugins: {
		autoprefixer: {},
		cssnano: {}
	}
} : module.exports = {
	plugins: {
		autoprefixer: {}
	}
}

/*if(process.env.NODE_END === 'production'){
	module.exports = {
		plugins: {
			autoprefixer: {},
			cssnano: {}
		}
	}
}
if(process.env.NODE_END === 'development'){
	module.exports = {
		plugins: {
			autoprefixer: {},
		}
	}
}*/
/*process.env.NODE_ENV === 'production' ? module.exports = {
	plugins: [
    require('autoprefixer'),
		require('cssnano')({
			preset: 'default'
		})
	]
} : module.exports = {
	plugins: [require('autoprefixer')]
}*/
/*process.env.NODE_ENV === 'production' ? module.exports = {
	plugins: []
} : module.exports = {
	plugins: []
}*/
