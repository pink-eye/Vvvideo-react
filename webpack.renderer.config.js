const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
	module: {
		rules,
	},
	plugins: plugins,
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/renderer'),
			'@/main': path.resolve(__dirname, 'src/main'),
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
	},
};
