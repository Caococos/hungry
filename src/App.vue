<template>
  <div id="app">
    <keep-alive>
      <router-view/>
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
