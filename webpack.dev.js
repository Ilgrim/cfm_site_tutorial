// Requerimos config básica y plugin merge de Webpack
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const config = {
	devtool: 'inline-source-map', // herramienta para depuración :)
	devServer: {
		contentBase: './src' // Ruta de nuestra vista al browser 
	}
};

module.exports = merge(common, config); // Exportamos la combinatoria que hace merge
										// sobre nuestros 2 archivos.