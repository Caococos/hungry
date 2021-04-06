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
import {mapState} from "vuex";
export default {
  name: "Foods",
  components: {
    Scroll,
    FoodInfo
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  updated() {
    //  2.获取项目的位
    this.$nextTick(() => {
      // v-for渲染组件之后ref获取到的组件是个数组
      for (let item of this.$refs.foodInfo) {
        this.themeTops.push(item.$el.offsetTop - 178)
      }
      this.themeTops.push(Number.MAX_VALUE)
    })
  },
  computed: mapState([
    'currentIndex',
    'themeTops'
  ]),
  methods: {
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTops.length
      for (let i =0; i < length-1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
          this.$store.state.currentIndex = i
        }
      }
    },
  }
}
</script>

<style scoped>
  .foods {
    flex: 1;
  }

  .wrapper {
    height: 100%;
  }



</style>
