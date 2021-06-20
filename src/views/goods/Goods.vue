<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-05-20 20:52:36
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-20 09:37:16
-->
<template>
  <div class="goods">
    <menus @click.native="menuClick" />
    <foods ref="goods" />
  </div>
</template>

<script>
import Menu from "@/views/goods/childComps/Menu";
import Foods from "@/views/goods/childComps/Foods";

import { goodsData } from "@/common/mixin";

export default {
  name: "Goods",
  components: {
    "menus": Menu,
    Foods,
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
