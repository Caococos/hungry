<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/Navbar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  @import "assets/stylus/base.css";
</style>
