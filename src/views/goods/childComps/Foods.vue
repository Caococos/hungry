<template>
  <div class="foods" v-if="goods.length !== 0">
    <scroll class="wrapper" :probe-type="3" @scroll="contentScroll" ref="scroll">
      <food-info v-for="(item, index) in goods" :food="item" :key="index" ref="foodInfo"></food-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import FoodInfo from "@/views/goods/childComps/FoodInfo";
import {goodsData} from "@/common/mixin";
export default {
  name: "Foods",
  components: {
    Scroll,
    FoodInfo
  },
  updated() {
    //  2.获取项目的位置
    this.$nextTick(() => {
      // v-for渲染组件之后ref获取到的组件是个数组
      for (let item of this.$refs.foodInfo) {
        this.themeTops.push(item.$el.offsetTop)  //offsetTop获取元素到距离该元素最近的一个具有定位的祖宗元素顶部的距离
      }
      this.themeTops.push(Number.MAX_VALUE)
    })
  },
  mixins: [goodsData],
  methods: {
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTops.length
      for (let i =0; i < length-1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
          this.$store.state.currentIndex = i  //这里不用mutations提交，节省代码量
        }
      }
    },
  }
}
</script>

<style scoped>
  .foods {
    position: relative;
    flex: 1;
  }

  .wrapper {
    height: 100%;
  }



</style>
