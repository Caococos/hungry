<template>
  <div class="goods">
    <menus :goods="goods" @click.native="menuClick"/>
    <foods :goods="goods" ref="goods"/>
    <shop-cart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"/>
  </div>
</template>

<script>
import Menu from "@/views/goods/childComps/Menu";
import Foods from "@/views/goods/childComps/Foods";
import ShopCart from "@/views/goods/childComps/ShopCart";

import {getGoodsData, getSellerData} from "@/network/home";
import {mapState} from "vuex"

export default {
  name: "Goods",
  components: {
    "menus": Menu,
    Foods,
    ShopCart
  },
  data() {
    return {
      goods: [],
      seller: {}
    }
  },
  created() {
    //请求数据
    getGoodsData().then(res => {
      this.goods = res.data
    });
    getSellerData().then(res => {
      this.seller = res.data
    })
  },
  computed: mapState([
    "currentIndex",
    "themeTops"
]),
  methods: {
    menuClick() {  //在父组件中调用'点击跳转特定位置'的方法，通过绑定组件的点击嘻嘻嘻
      this.$refs.goods.$refs.scroll.scrollTo(0, -this.themeTops[this.currentIndex], 100)
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    width: 100%;
    height: 441px;
    overflow: hidden;
  }

</style>
