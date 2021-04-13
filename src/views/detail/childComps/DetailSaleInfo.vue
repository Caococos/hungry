<template>
  <div class="detail-sale-info">
    <h2 class="name">{{food.name}}</h2>
    <div class="info">
      <span class="sell-count">月售{{food.sellCount}}份</span>
      <span class="rating">好评率{{food.rating}}%</span>
    </div>
    <div class="price">
      <span class="now">￥{{food.price}}</span>
      <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
    </div>
    <transition name="fade">
      <div class="buy" v-show="!foodCount || foodCount === 0" @click="addFirst">加入购物车{{food.count}}</div>
    </transition>
    <cart-control :food="food" class="cart-control"/>
  </div>
</template>

<script>
import CartControl from "@/views/goods/childComps/CartControl";

import {mapState, mapActions} from "vuex";
import {foodCount} from "@/common/mixin";

export default {
  name: "DetailSaleInfo",
  components: {
    CartControl
  },
  computed: {
    ...mapState({
      food: 'detailFood',
      selectFood: 'selectFood'
    })
  },
  mixins: [foodCount],
  methods: {
    ...mapActions(['addCart']),
    addFirst() {
      const product = {}
      product.name = this.food.name
      product.price = this.food.price
      this.addCart(product).then(res => {
        this.$toast.show(res)
      })
    },
  }
}
</script>

<style scoped>
.detail-sale-info {
  position: relative;
  padding: 18px;
}

.name {
  font-size: 14px;
  color: var(--color-title);
}

.info {
  margin-top: 8px;
  font-size: 10px;
  line-height: 10px;
  color: var(--color-tint);
}

.sell-count {
  margin-right: 12px;
}

.price {
  margin-top: 18px;
  font-weight: 700;
}

.now {
  margin-right: 6px;
  font-size: 14px;
  color: var(--color-high-text);
  line-height: 14px;
}

.old {
  line-height: 14px;
  font-size: 10px;
  color: var(--color-tint);
  text-decoration: line-through;
}

.buy {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 10;
  height: 24px;
  line-height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  color: #fff;
  background-color: rgb(0, 160, 220);
  font-size: 10px;

/*  动画*/
  transition: all .3s;
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.cart-control {
  position: absolute;
  right: 12px;
  bottom: 12px;
}

</style>
