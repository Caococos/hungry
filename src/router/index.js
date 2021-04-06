import Vue from 'vue'
import VueRouter from 'vue-router'
//实现路由懒加载
const Shop = () => import('@/views/shop/Shop')
const Goods = () => import ('@/views/goods/Goods')
const Detail = () => import('@/views/detail/Detail')
const Ratings = () => import ('@/views/ratings/Ratings')
const Seller = () => import ('@/views/seller/Seller')


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
// 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: '/',
    redirect: '/shop'  //重定向
  },
  {
    path: '/shop',
    component: Shop,
    name: 'shop',
    children: [
      {
        path: 'goods',
        component: Goods,
        name: 'goods'
      },

      {
        path: 'ratings',
        component: Ratings,
        name: 'ratings'
      },
      {
        path: 'seller',
        component: Seller,
        name: 'seller',
      }
    ]
  },
  {
    path: '/detail',
    component: Detail,
    name: 'detail',
  }

]
//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
  // mode: "history"
})
//导出  在main.js创建和挂载根实例。
export default router
