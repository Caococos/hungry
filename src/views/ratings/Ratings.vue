<template>
  <transition name="move">
    <div class="ratings">
      <scroll ref="scroll" class="wrapper">
        <comprehensive-rating/>
        <split/>
        <rating-select :rating="ratings"/>
        <ratings-info/>
      </scroll>
    </div>
  </transition>
</template>

<script>
import ComprehensiveRating from "@/views/ratings/childComps/ComprehensiveRating";
import RatingSelect from "@/components/content/ratingselect/RatingSelect";
import RatingsInfo from "@/views/ratings/childComps/RatingsInfo";
import Split from "@/components/common/split/Split";
import Scroll from "@/components/common/scroll/Scroll";

import {ratingControl, ratingData} from "@/common/mixin";
import {mapMutations} from "vuex";
export default {
  name: "Ratings",
  components: {
    ComprehensiveRating,
    RatingSelect,
    RatingsInfo,
    Split,
    Scroll
  },
  activated() {
    this.$refs.scroll.refresh()  //进入页面刷新滚动高度
  },
  deactivated() {
    this.changeType(2)   //离开页面把selectType设为默认值
    this.$store.state.onlyContent = true
  },
  mixins: [ratingData, ratingControl],
  methods: {
    ...mapMutations(['changeType'])
  },
  watch: {
    selectType: function () {     //监听不同类型的评价  刷新页面高度
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    onlyContent: function () {   //监听是否只查看内容变量 刷新页面高度
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 441px;
  overflow: hidden;
}

.move-enter-active {
  transition: transform .5s;
}

.move-enter {
  transform: translate3d(100%, 0, 0);
}

</style>
