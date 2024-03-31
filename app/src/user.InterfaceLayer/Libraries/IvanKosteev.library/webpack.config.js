const path = require("path");

module.exports = {
	entry: {
		main: "./src/index.js", // Главная точка входа вашей библиотеки
	},
	output: {
		path: path.resolve(__dirname, "dist"), // Путь к выходной директории
		filename: "[name].js", // Имя выходного файла будет соответствовать ключу entry
		library: "YourLibraryName", // Имя, под которым ваша библиотека будет доступна
		libraryTarget: "umd", // Цель экспорта - Universal Module Definition (UMD)
		umdNamedDefine: true,
		globalObject: "this", // Глобальный объект, используемый в UMD
	},
	module: {
		rules: [
			// Добавьте правила для обработки JS/JSX файлов, если требуется
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"], // Расширения файлов, которые Webpack будет искать
	},
	externals: {
		react: "React", // Внешние зависимости, которые пользователи должны предоставить сами
		"react-dom": "ReactDOM",
	},
};
