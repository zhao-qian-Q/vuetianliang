const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports ={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
          
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},

            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader'},
        ]
    },
    
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]
}