<template>
  <div class="detail">
    <div class="back" @click="back">
      <i class="icon-arrow_lift"></i>
    </div>
    <scroll class="wrapper" ref="scroll">
      <div class="header-img">
        <img :src="detailFood.image" alt="">
      </div>
      <detail-sale-info/>
      <split v-show="detailFood.info"/>
      <detail-base-info v-show="detailFood.info"/>
      <split/>
      <detail-ratings/>
    </scroll>
    <shop-cart/>
  </div>
</template>

<script>
import DetailSaleInfo from "@/views/detail/childComps/DetailSaleInfo";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailRatings from "@/views/detail/childComps/DetailRatings";
import ShopCart from "@/views/goods/childComps/ShopCart";
import Split from "@/components/common/split/Split";
import Scroll from "@/components/common/scroll/Scroll";

import {detailData, ratingControl} from "@/common/mixin";
import {mapMutations} from "vuex";

export default {
  name: "Detail",
  components: {
    DetailSaleInfo,
    DetailBaseInfo,
    DetailRatings,
    ShopCart,
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
  mixins: [ratingControl, detailData],
  methods: {
    ...mapMutations(['changeType']),
    back() {
      this.$router.back()
    },
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
.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}

.wrapper {
  height: 619px;
}

.header-img img {
  position: relative;
  height: 325px;
}

.back {
  position: absolute;
  left: 2px;
  top: 10px;
  z-index: 10;
}

.icon-arrow_lift {
  display: block;
  padding: 10px;
  font-size: 20px;
  color: #fff;
}

</style>
