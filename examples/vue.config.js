/*vue配置
 * @Author: zhangjianzhong
 * @Date: 2020-07-03 15:39:50
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-13 15:22:09
 */
const path = require('path');
const extract = process.env.NODE_ENV == 'production';

function resolve(dir){
	return path.join(__dirname, dir);
}

module.exports = {
	productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
	// 输出文件目录
	outputDir: 'dist',
	publicPath: '/',
	css: {
		extract, // 是否使用css分离插件 ExtractTextPlugin
		sourceMap: false, // 开启 CSS source maps
		loaderOptions: {}, // css预设器配置项
		modules: false // 启用 CSS modules for all css / pre-processor files.
	},
	productionSourceMap: false,
	devServer: { // 环境配置
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		open: true, //配置自动启动浏览器
		disableHostCheck: true,
		proxy: {
			'/api/': {
				target: 'http://sit.yiside.cn',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		}
	},
	pluginOptions: { // 第三方插件配置
		// ...
	},
	chainWebpack: config=>{
		config.resolve.alias.set('@components', resolve('../components/'))
							.set('@widgets', resolve('../widgets/'))
							.set('@utils', resolve('../utils/'));
	},
};
