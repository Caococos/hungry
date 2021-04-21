
export default {
  //获取店铺数据
  getSeller(state, payload) {
    state.seller = payload
  },
  getGoods(state, payload) {
    state.goods = payload
  },
  getRatings(state, payload) {
    state.ratings = payload
  },

  //关联功能
  changeIndex(state, payload) {
    state.currentIndex = payload
  },

  //增删商品
  addToCart(state, payload) {
    state.selectFood.push(payload)  //将商品对象push进数组
  },
  addCount(state, payload) {
    payload.count++
  },
  removeCart(state, payload) {
    state.selectFood = state.selectFood.filter(food => food.name !== payload.name)
  },
  decreaseCount(state, payload) {
    state.selectFood.forEach(item => {
      if (item.name === payload.name) {
        item.count--
      }
    })
  },
  clearCart(state) {
    state.selectFood = []
  },

  //清除上一个detail数据，并赋予新值
  toDetail(state, payload) {
    // let food = state.detailFood
    // Object.keys(food).forEach(keys => delete food[keys]) //ES6 清空对象写法，能把原数据删除，慎用！
    state.detailFood = payload
  },

  //改变评论类型
  changeType(state, payload) {
    state.selectType = payload
  },

  // 改变查看内容类型
  changeContent(state) {
    state.onlyContent = !state.onlyContent
  },

  //小球动画
  changeShow (state, {index, isShow, el}) {
    state.balls[index].show = isShow
    state.balls[index].el = el
  },
  changeDropBall (state, ball) {
    state.dropBall.push(ball)
  }
}
