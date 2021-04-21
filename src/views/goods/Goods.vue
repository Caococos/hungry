<template>
  <transition name="move">
    <div class="goods">
      <menus @click.native="menuClick"/>
      <foods ref="goods"/>
    </div>
  </transition>
</template>

<script>
import Menu from "@/views/goods/childComps/Menu";
import Foods from "@/views/goods/childComps/Foods";

import {goodsData} from "@/common/mixin";

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
  .move-enter-active {
    transition: transform .5s;
  }

  .move-enter {
    transform: translate3d(-100%, 0, 0);
  }

</style>
