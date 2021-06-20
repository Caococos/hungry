<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Zhihaot1
 * @Date: 2021-05-20 20:52:36
 * @LastEditors: Zhihaot1
 * @LastEditTime: 2021-06-20 09:38:24
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import "assets/css/index.css";
</style>
