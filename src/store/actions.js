
export default {
  addCart(context, payload) {
    return new Promise(resolve => {
    //  1,先判断购物车中是否有该商品
      let OldProduct = context.state.selectFood.find(item => item.name === payload.name)
      if (OldProduct) {
        context.commit('addCount', OldProduct)
        resolve('食物数量+1')
      }else {
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加了食物')
      }
    })
  },
  removeToCart(context, payload) {
    return new Promise(resolve => {
      payload = context.state.selectFood.filter(food => food.name === payload.name)[0]
      if (payload.count === 1){
        context.commit('removeCart', payload)
        resolve('食物被移除了')
      } else {
        context.commit('decreaseCount', payload)
        resolve('食物数量-1')
      }
    })
  }
}
