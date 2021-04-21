<template>
  <transition name="move">
    <div class="seller">
      <scroll class="wrapper" ref="scroll">
        <seller-overview :seller="seller"/>
        <split/>
        <seller-bulletin :seller="seller"/>
        <split/>
        <seller-picture :pics="seller.pics"/>
        <split/>
        <seller-info :infos="seller.infos"/>
      </scroll>
    </div>
  </transition>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import SellerOverview from "@/views/seller/childComps/SellerOverview";
import SellerBulletin from "@/views/seller/childComps/SellerBulletin";
import SellerPicture from "@/views/seller/childComps/SellerPicture";
import SellerInfo from "@/views/seller/childComps/SellerInfo";
import Split from "@/components/common/split/Split";

import {sellerData} from "@/common/mixin";

export default {
  name: "Seller",
  components: {
    SellerOverview,
    SellerBulletin,
    SellerPicture,
    SellerInfo,
    Split,
    Scroll
  },
  activated() {
    this.$refs.scroll.refresh()  //有东西没有加载完成，所以需要在进入该路由页面之后刷新scroll高度
  },
  mounted() {
  },
  mixins: [sellerData]
}
</script>

<style scoped>
.wrapper {
  height: 441px;
  overflow: hidden;
  white-space: nowrap;
}

.move-enter-active {
  transition: transform .5s;
}

.move-enter {
  transform: translate3d(100%, 0, 0);
}

</style>
