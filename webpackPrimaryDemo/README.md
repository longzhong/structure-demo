## 使用方法
    npm run build 
    <!--打包生成dist，生产环境包-->
    npm run dev
    <!--开启本地服务器，打开开发环境-->
    npm run version
    <!--查看当前包的webpack版本，记住要当前目录安装wbepack，如果你全局安装了，uninstall一下全局安装的webpack，再重申一遍，不建议全局安装webpack-->



## 目录结构

* __src__   --开发源代码
  * __index.html__  --主html文件入口
  * __main.js__ --引入各模块的入口js文件
* __.babelrc__  --babel通用配置文件
* __.gitignore__    --禁止git同步的配置文件
* __package.json__  --基础配置目录，laoder及plugins版本记录、公共配置等
* __postcss.config.js__ --postcss公共配置文件
* __webpack.config.js__ --webpack配置文件


## 基础webpack Demo的package.json的简要介绍

> 这里只简单说下每个插件和loader的作用，不会详细介绍每种loader的用法，具体用法及使用方式会在代码中做具体的注释以及博客中会有详细的讲解

<!--先从少的说起吧-->
* __dependencies__ --在生产环境中仍旧需要的包或者插件
  * __html-withimg-loader__ --处理img标签中通过src引入图片的打包
* __browserslist__ --浏览器目录,一些插件或者loader会使用到这个配置（比如autoprefixer）,写在这里是为了提取公共配置
* __devDependencies__ --开发环境所依赖的包或者插件
  * __autoprefixer__ --自动添加CSS3前缀
  * __babel-core__ --babel转义的核心插件
  * __babel-loader__  --babel匹配js转义的laoder
  * __babel-preset-env__ --简单说就是把你写的ES6代码转义成目前浏览器可以识别的JS代码
  * __babel-preset-react__ --把react代码转义成浏览器可识别的JS代码
  * __css-loader__ --用于在js中加载css，通常与style-loader共同使用
  * __extract-text-webpack-plugin__ --webpack打包的时候会把css打包进js，该插件的主要作用是从js中抽离css行程一个单独的css文件 
  * __file-loader__ --主要用于引入路径的解决方案 
  * __html-webpack-plugin__  --自动生成html文件并引入相关依赖（js,css）
  * __less__  --使用less需要用到
  * __less-loader__ --把less转义成css的loader
  * __node-sass__ --使用sass需要用到
  * __postcss-loader__ --通过相关插件来实现你想要的各种依赖与postcss的功能，如autoprefixer
  * __purify-css__ --精简css代码，删除在打包时未使用的css
  * __purifycss-webpack__ --依赖于purify-css
  * __sass-loader__ --把sass转义成css的loader
  * __style-loader__  --把打包后分离出的css合并进一个样式表并以标签的形式插入到html中，通常与css-loader一起使用
  * __url-loader__ --其本意是为了减少图片的网络请求，通常与file-loader合用，本身封装了file-loader
  * __webpack__ --webpack核心
  * __webpack-cli__ webpack4版本从webpack包独立出来的
  * __webpack-dev-server__ --小型nodejs express服务器