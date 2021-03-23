import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import FastClick from 'fastclick'
import loading from '@/components/common/Loading'

Vue.config.productionTip = false

Vue.use(loading)  //注册安装插件


//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
