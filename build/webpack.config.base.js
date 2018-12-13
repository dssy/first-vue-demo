const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//使用cross-env模块在不同操作系统上配置统一的全局环境变量
const isDev = process.env.Node_ENV === 'development'

const config = {
    target: 'web',//表示程序运行在web
    entry: path.join(__dirname, '../src/index.js'),//入口文件
    output: {
        filename: 'bundle.js',//输出文件地址及名称
        path: path.join(__dirname, '../dist')
    },
    mode: isDev ? 'development' : 'production',//webpack编译模式（开发环境为development，生产环境为production）
    module: {//webpack中一切皆模块，一个模块对应一个文件
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'//模块转换器，原内容按需转换为新内容
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: __dirname + 'node_modules',
              include: __dirname + 'src'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3072,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
}

module.exports = config

