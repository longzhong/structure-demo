## 使用方法
    npm install
    <!-- 安装依赖包 -->
    npm run build 
    <!--打包生成dist，生产环境包-->
    npm run dev
    <!--开启本地服务器，打开开发环境-->
    npm run version
    <!--查看当前包的webpack版本，记住要当前目录安装wbepack，如果你全局安装了，uninstall一下全局安装的webpack，再重申一遍，不建议全局安装webpack-->

> 这里不再对之前的配置重复说明了，只会详细介绍下新增的部分。

## 目录结构

* __src__   --开发源代码
  * __index.html__  --主html文件入口
  * __main.js__ --引入各模块的入口js文件
* __.babelrc__  --babel通用配置文件
* __.gitignore__    --禁止git同步的配置文件
* __entry.js__ --模块化入口文件
* __package.json__  --基础配置目录，laoder及plugins版本记录、公共配置等
* __postcss.config.js__ --postcss公共配置文件
* __webpack.config.js__ --webpack配置文件
* __public__ --静态资源目录

