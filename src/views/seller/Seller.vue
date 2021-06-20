<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-05-20 20:52:36
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-20 09:36:43
-->
<template>
  <div class="seller">
    <scroll class="wrapper" ref="scroll">
      <seller-overview :seller="seller" />
      <split />
      <seller-bulletin :seller="seller" />
      <split />
      <seller-picture :pics="seller.pics" />
      <split />
      <seller-info :infos="seller.infos" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import SellerOverview from "@/views/seller/childComps/SellerOverview";
import SellerBulletin from "@/views/seller/childComps/SellerBulletin";
import SellerPicture from "@/views/seller/childComps/SellerPicture";
import SellerInfo from "@/views/seller/childComps/SellerInfo";
import Split from "@/components/common/split/Split";

import { sellerData } from "@/common/mixin";

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
</style>
