<template>
  <div class="header">
    <header-content :content="seller"/>
    <header-bulletin :bulletin="seller"/>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <detail :seller="seller"/>
  </div>
</template>

<script>
import HeaderContent from "@/components/content/header/childComps/HeaderContent";
import HeaderBulletin from "@/components/content/header/childComps/HeaderBulletin";
import Detail from "@/components/content/header/childComps/Detail";

import {getSellerData} from "@/network/home";
export default {
  name: "Header",
  components: {
    HeaderContent,
    HeaderBulletin,
    Detail
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    getSellerData().then(res => {
      this.seller = res.data
    })
  },
}
</script>

<style scoped>
  .header {
    position: relative;
    overflow: hidden;
    background: rgba(7, 17, 27, 0.5);
    color: #fff;
    font-size: 14px;
  }

  .background {
    position: absolute;
    top: -30px;
    left: 0;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
  }

</style>
