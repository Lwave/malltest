import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//axios发送并发请求----->返回的是一个数组
/*axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/category'
})]).then(results => {

})*/

/*
axios.all([axios({
  url: ''
}), axios({
  url: ''
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
})
*/
//创建对应的axios的实例
/*const instance = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 1000
})

instance({
  url: 'home/multidata',
  timeout: 5000
}).then(res => {
  /!*  console.log(res);*!/
})*/
//封装request模块

import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}, err => {
  console.log(err);
})

