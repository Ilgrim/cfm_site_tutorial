// Requerimos config básica y plugin merge de Webpack
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
	devtool: 'source-map', // herramienta para depuración :)
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		})
	]
};

module.exports = merge(common, config); // Exportamos la combinatoria que hace merge
										// sobre nuestros 2 archivos.