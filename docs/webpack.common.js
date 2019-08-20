module.exports = {
    entry: ['./src/main.jsx'],
    output: {
        path: __dirname,
        filename: 'dist/main.js'
    },
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.(js|jsx)$/,
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
    }
};
