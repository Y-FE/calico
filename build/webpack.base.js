const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: 'calico.common.js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.vue', '.js']
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    }, 
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    }, 
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                          resources: path.join(__dirname, '../src/css/index.scss')
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            }
        ]
    }
};
