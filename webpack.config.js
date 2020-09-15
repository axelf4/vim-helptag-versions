const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: path.resolve(__dirname, 'tag-versions'),
				loader: 'csv-loader',
				options: {
					delimiter: '\t', newline: '\n',
				}
			},
		],
	},
};
