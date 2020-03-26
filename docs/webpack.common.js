const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/bundle.[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.(css|scss)$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            use: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
