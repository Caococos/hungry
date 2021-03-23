<template>
  <div id="app">
    <v-header/>
    <main-nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/content/header/Header";
import MainNavBar from "@/components/content/mainNavBar/MainNavBar";

import {getSellerData} from "@/network/home"

export default {
  name: 'App',
  components: {
    MainNavBar,
    'v-header': Header   //因为header本身就是HTML标签，这里去个别名才能让组件渲染出来
  }
}
</script>

<style>
  @import "assets/css/index.css";
</style>
