<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-05-20 20:52:36
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-20 09:37:05
-->
<template>
  <div class="ratings">
    <scroll ref="scroll" class="wrapper">
      <comprehensive-rating />
      <split />
      <rating-select :rating="ratings" />
      <ratings-info />
    </scroll>
  </div>
</template>

<script>
import ComprehensiveRating from "@/views/ratings/childComps/ComprehensiveRating";
import RatingSelect from "@/components/content/ratingselect/RatingSelect";
import RatingsInfo from "@/views/ratings/childComps/RatingsInfo";
import Split from "@/components/common/split/Split";
import Scroll from "@/components/common/scroll/Scroll";

import { ratingControl, ratingData } from "@/common/mixin";
import { mapMutations } from "vuex";
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
</style>
