import axios from 'axios'

/*
export function request(config) {
  return new Promise((resolve, reject) => {
    //创建实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    //发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(res)
      })
  })
}
*/


export function request(config) {
  //创建实例  config:url,success，failure
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //拦截器
  //请求拦截
  /* instance.interceptors.request.use(config => {
     console.log(config);
     //1.比如一些信息不满足服务器需求
     //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
     //3.登陆必须携带一些登录请求(tocken)
     return config;
   }, err => {
     console.log(err);
   })*/
  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
  }, err => {
    console.log(err);
  })
  //发送真正的网络请求
  return instance(config) //函数本身返回promise
}
