const resolve = require('path').resolve;

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/bundle.[name].[chunkhash].js'
    },
    optimization: {
        concatenateModules: true
    },
    module: {
        rules: [{
            test: /\.iCrush$/,
            use: ['babel-loader', 'icrush/webpack/icrush-loader.js']
        }, {
            test: /\.js$/,
            //只在src文件夹下查找
            include: [resolve(__dirname, 'src')],
            //不会去查找的路径
            exclude: /node_modules/,
            // 把Babel编译过的文件缓存起来
            loader: "babel-loader?cacheDirectory=.babel-cache"
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    publicPath: "../",
                    name: "build/[path][name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    }
};
