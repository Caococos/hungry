<template>
  <div class="goods">
    <menus @click.native="menuClick"/>
    <foods ref="goods"/>
    <shop-cart/>
  </div>
</template>

<script>
import Menu from "@/views/goods/childComps/Menu";
import Foods from "@/views/goods/childComps/Foods";
import ShopCart from "@/views/goods/childComps/ShopCart";

import {goodsData} from "@/common/mixin";

export default {
  name: "Goods",
  components: {
    "menus": Menu,
    Foods,
    ShopCart
  },
  mixins: [goodsData],
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
