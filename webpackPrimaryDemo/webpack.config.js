/*node内置模块，用于把相对路径解析为绝对路径*/
const path = require('path');
/*node内置模块，主要用于全局的模式匹配，在这里是为了匹配html文件*/
const glob = require('glob');
/*webpack插件，压缩文件*/
const uglify = require('uglifyjs-webpack-plugin');
/*自动生成html文件并且引入相关assets文件*/
const htmlPlugin= require('html-webpack-plugin');
/*对资源库和css进行代码分离，在这里主要是为了分离打包在js中的css文件*/
const extractTextPlugin = require("extract-text-webpack-plugin");
/*在打包的时候除去未使用到的css样式*/
const PurifyCSSPlugin = require("purifycss-webpack");
/*公共路径配置*/
var webpath={
    publicPath:"http://192.168.199.124:9090/"
}

module.exports={
  /*开始调试模式，博客中有详细的解释*/
    devtool: 'source-map',
    /*入口文件*/
    entry:{
        main:'./src/main.js',
    },
    /*出口文件*/
    output:{
      /*绝对路径地址*/
        path:path.resolve(__dirname,'dist'),
        /*出口文件的名字对应使用入口文件的名字*/
        filename:'[name].js',
        /*公共路径，主要作用就是处理静态文件路径的*/
        publicPath:webpath.publicPath
    },
    /*loader配置*/
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
          /*转义es6语法的babel-loade配置*/
            test:/\.(jsx|js)$/,
            use:{
                loader:'babel-loader'
               
            },
            exclude:/node_modules/
        }
      ]
},
/*插件的使用*/
plugins:[
/*压缩插件*/
    new uglify({
      /*这里如果不开启的话，上面devtool的配置是无法生效的，一定要注意*/
      sourceMap:true
    }),
    new htmlPlugin({
        minify:{
            removeAttributeQuotes:true //取消html属性中的双引号
        },
        hash:true,
        template:'./src/index.html'
       
    }),
    new extractTextPlugin("css/index.css"),
    /*如果想要在打包的时候把未使用的css删除掉，需要去匹配所有的DOM树以确定哪些css用到了*/
    new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, 'src/*.html')),
    })
],
/*开发服务*/
    devServer:{
        open:true, //是否自动打开浏览器
        inline:true, //在控制台显示消息，比如重新加载或报错等
        contentBase:path.resolve(__dirname,'dist'), //服务文件地址
        host:'192.168.199.124',  //域名
        compress:true, //是否开启服务器压缩
        port:9090 //端口号
    }
}