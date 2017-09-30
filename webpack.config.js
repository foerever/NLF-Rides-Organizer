var path = require('path');
const webpack = require('webpack');


console.log('THIS IS THE DIR', __dirname);

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './public/build'),
        filename: 'bundle.js',
    } ,
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader","babel-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                loaders: ["style-loader", "css-loader", "sass-loader"],
                test: /\.sass$/
            },

        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        ],
    devServer: {
        publicPath: '/build/',
        contentBase: "public/"
    }
};
