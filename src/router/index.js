import Vue from 'vue'
import VueRouter from 'vue-router'
//实现路由懒加载
const Goods = () => import ('@/views/goods/Goods')
const Ratings = () => import ('@/views/ratings/Ratings')
const Seller = () => import ('@/views/seller/Seller')

Vue.use(VueRouter)
// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: '',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }
]
//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
  // mode: "history"
})
//导出  在main.js创建和挂载根实例。
export default router
