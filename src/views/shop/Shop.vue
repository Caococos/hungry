<template>
  <div class="shop">
    <v-header/>
    <main-nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/content/header/Header";
import MainNavBar from "@/components/content/mainNavBar/MainNavBar";
import {getGoodsData, getSellerData, getRatingsData} from "@/network/home";
import {mapMutations} from "vuex";
export default {
  name: "Shop",
  components: {
    MainNavBar,
    'v-header': Header,   //因为header本身就是HTML标签，这里去个别名才能让组件渲染出来
  },
  methods: mapMutations(['getGoods', 'getSeller', 'getRatings']),
  created() {
    //请求数据
    getGoodsData().then(res => {
      this.getGoods(res.data)
    });
    getSellerData().then(res => {
      this.getSeller(res.data)
    });
    getRatingsData().then(res => {
      this.getRatings(res.data)
    })
  },
  activated() {
    this.$router.push({name: 'goods'})
  }
}
</script>

<style scoped>

</style>
