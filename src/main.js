import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import FastClick from 'fastclick'
import loading from '@/components/common/Loading'
import toast from "@/components/common/toast";
import store from '@/store'

Vue.config.productionTip = false

//注册安装插件
Vue.use(loading)  //网络请求吐司
Vue.use(toast)  //添加商品吐司

//解决移动端300ms延迟
FastClick.attach(document.body)

//在原型中添加$bus，并将vue实例作为事件总线
Vue.prototype.$bus = new Vue()
// 定义全局点击函数
// Vue.prototype.globalClick = function (callback) {   //不知道为什么类名绑定不到，所以就没用了
//   document.getElementsByClassName('menu-item').onclick = function () {
//     callback();
//   };
// };

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
