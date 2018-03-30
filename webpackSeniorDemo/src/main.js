/*引入各样式*/
import css from './css/index.css';
import less from './css/index.less';
import sass from './css/index.scss';

//引入jQuery
/*import $ from 'jquery';*/
//编写jQuery代码
$('#jqueryDiv').html('Hello Zaking,jQuery is useful');

/*ES6语法，测试babel转译*/
{
	let name = "Hello Wbpack,I'm Zaking";
	document.getElementById('name').innerHTML=name;
}

import Vue from 'vue'
//vue代码
var app = new Vue({
  el: '#vueApp',
  data: {
    message: 'Hello Vue!'
  }
})

//读取json
var json =require('../package.json');
document.getElementById("jsonDiv").innerHTML= json.name;