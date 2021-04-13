import Vue from "vue"
import Vuex from "vuex"
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";


Vue.use(Vuex)

const state = {
  // 请求到的数据
  seller: {},
  goods: [],
  ratings: [],

  //  '关联点击'小功能需要的变量
  currentIndex: 0,
  themeTops: [],

  //  商品信息
  selectFood: [],

//  小球点击获取的元素
  balls: [{
    show: false
  }, {
    show: false
  }, {
    show: false
  }, {
    show: false
  }, {
    show: false
  }],
  dropBall: [],

//  保存要展示商品的信息
  detailFood: {},

//  展示评论的类型
  selectType: 2
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
