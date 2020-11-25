const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components',resolve('src/components'))
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    },
    devServer: {
        proxy: {
            '/apc': { //访问路径，可以自己设置，
                target: 'https://5b5e71c98e9f160014b88cc9.mockapi.io/', //代理接口，即后端运行所在的端口
                changeOrigin: true, //设置是否跨域
                ws: true,
                secure: false, // false为http访问，true为https访问
                pathRewrite: {
                    '^/apc': '/'
                }
            }
        }
    }
};