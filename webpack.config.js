var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    entry: ['./app/index.js'],

    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },

    devServer: {
        inline: true,   
        port: 3333
    },

    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel', 
                query: {
                    presets: ['react','ES2015']          
                }
            }
     ]
},

    plugins: [HtmlWebpackPluginConfig]

}