import {mapState} from "vuex";

//筛选商品计算各自数量的混入
export const foodCount = {
  computed: {
    foodCount() {
      const payload = this.selectFood.filter(item => item.name === this.food.name)[0]  //筛选各自食物
      if (payload) {
        return (payload.count);
      }
    }
  }
}

//店铺信息混入
export const sellerData = {
  computed: {
    ...mapState(['seller'])
  }
}

//评论信息混入
export const ratingData = {
  computed: {
    ...mapState(["ratings"])
  }
}

//商品展示信息混入
export const goodsData = {
  computed: mapState([
    "goods",
    "currentIndex",
    "themeTops"
  ]),
}

//单个商品数据
export const detailData = {
  computed: {
    ...mapState(["detailFood"])
  }
}

export const ratingControl = {
  computed: {
    ...mapState(["selectType", "onlyContent"])   //Detail、RatingSelect需要的Vuex变量}
  }
}

