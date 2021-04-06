
export default {
  //关联功能
  changeIndex(state, payload) {
    state.currentIndex = payload
  },

  //增删商品
  addCart(state, payload) {
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

  //小球动画
  changeShow (state, {index, isShow, el}) {
    state.balls[index].show = isShow
    state.balls[index].el = el
  },
  changeDropBall (state, ball) {
    state.dropBall.push(ball)
  }
}
