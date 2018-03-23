const path = require('path');
const glob = require('glob');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin= require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
var webpath={
    publicPath:"http://192.168.199.124:9090/"
}

module.exports={
    devtool: 'source-map',
    entry:{
        main:'./src/main.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:webpath.publicPath
    },
module:{
    rules: [
        {
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { importLoaders: 1}, },
                   'postcss-loader'
                ]
            })
        },{
           test:/\.(png|jpg|gif)/ ,
           use:[{
               loader:'url-loader',
               options:{
                   limit:5000,
                   outputPath:'images/'
               }
           }]
        },{
          test: /\.(htm|html)$/i,
          use:['html-withimg-loader'] 
        },{
          test: /\.less$/,
          use: extractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                fallback: "style-loader"
            })
        },{
          test: /\.scss$/,
          use: extractTextPlugin.extract({
              use: [{
                 loader: "css-loader"
               }, {
                 loader: "sass-loader"
               }],
                fallback: "style-loader"
               })
        }, {
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader'
               
            },
            exclude:/node_modules/
        }
      ]
},
plugins:[
    new uglify({
      sourceMap:true
    }),
    new htmlPlugin({
        minify:{
            removeAttributeQuotes:true
        },
        hash:true,
        template:'./src/index.html'
       
    }),
    new extractTextPlugin("css/index.css"),
    new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, 'src/*.html')),
    })
],
    devServer:{
        open:true,
        inline:true,
        contentBase:path.resolve(__dirname,'dist'),
        host:'192.168.199.124',
        compress:true,
        port:9090
    }
}