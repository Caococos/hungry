<template>
  <div class="shop">
    <v-header/>
    <main-nav-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@/components/content/header/Header";
import MainNavBar from "@/components/content/mainNavBar/MainNavBar";
export default {
  name: "Shop",
  components: {
    MainNavBar,
    'v-header': Header,   //因为header本身就是HTML标签，这里去个别名才能让组件渲染出来
  },
  activated() {
    this.$router.push({name: 'goods'})
  }
}
</script>

<style scoped>

</style>
