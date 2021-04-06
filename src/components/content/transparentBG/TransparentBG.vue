<template>
  <transition name="fade">
    <div class="bg"></div>
  </transition>
</template>

<script>
export default {
name: "TransparentBG"
}
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  transition: all .5s;
  opacity: 1;
  background-color: rgba(7, 17, 27, .6);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  background-color: rgba(7, 17, 27, 0);
}

/*.bg:after {*/
/*  content: "";*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  position: absolute;*/
/*  left: 0;*/
/*  top: 0;*/
/*  z-index: 2;*/
/*  filter: blur(10px);*/
/*}*/



</style>
