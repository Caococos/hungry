<template>
  <div class="detail">
    <div class="header-img">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  activated() {
    console.log('来了');
  }
}
</script>

<style scoped>
.detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  min-height: 100vh;
}

</style>
