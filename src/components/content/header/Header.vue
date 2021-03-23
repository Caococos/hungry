<template>
  <div class="header">
    <header-content :content="seller"/>
    <header-bulletin :bulletin="seller"/>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import HeaderContent from "@/components/content/header/childComps/HeaderContent";
import HeaderBulletin from "@/components/content/header/childComps/HeaderBulletin";
import {getSellerData} from "@/network/home";
export default {
  name: "Header",
  components: {
    HeaderContent,
    HeaderBulletin
  },
  data() {
    return {
      seller: {}
    }
  },
  created() {
    getSellerData().then(res => {
      this.seller = res.data
      console.log(res)
    })
  },
}
</script>

<style scoped>
  .header {
    position: relative;
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
