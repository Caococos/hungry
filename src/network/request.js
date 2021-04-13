import axios from "axios";
import Vue from 'vue'
export function  request(config) {
  //创建实例
  const instance = axios.create({
    // 根路径
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    Vue.prototype.$loading.loadingShow();  // 显示加载动画
    //拦截请求之后要把请求返回去
    return config
  }, err => {
    return err
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    Vue.prototype.$loading.loadingNo();  // 显示加载动画
    return res.data
  }, err => {
    console.log(err);
    return err
  })

  //发送真正的网络请求
  return instance(config)
}
