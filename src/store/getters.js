
export default {
  totalPrice(state) {  //计算总价格
    let total = 0;
    state.selectFood.forEach(food => {
      total += food.price * food.count;
    });
    return total;
  },
  totalCount(state) {  //计算总数量
    let count = 0;
    state.selectFood.forEach(food => {
      count += food.count;
    });
    return count;
  },
}
