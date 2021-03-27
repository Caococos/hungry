<template>
  <div class="star" :class="starNumber"></div>
</template>

<script>
export default {
  name: "Star",
  props: {
    number: {
      type: Number
    }
  },
  computed: {
    starNumber() {
      return 'star-' + Math.floor(this.number *2)/2 * 10
      //   Math.floor上下取整  Math.round四舍五入取整  Math.ceil向上取整
    }
  }
}

</script>

<style scoped>
  .star {
    width: 100%;
    height: 20px;
    background: url("~@/assets/img/content/star_48px_@2x.png") no-repeat;
    background-size: 186px;
  }

  .star-45 {
    background-position-y: -24px;
  }

  .star-40 {
    background-position-y: -48px;
  }

  .star-35 {
    background-position-y: -72px;
  }

  .star-30 {
    background-position-y: -96px;
  }

  .star-25 {
    background-position-y: -120px;
  }

  .star-20 {
    background-position-y: -144px;
  }

  .star-15 {
    background-position-y: -168px;
  }

  .star-10 {
    background-position-y: -192px;
  }

  .star-5 {
    background-position-y: -216px;
  }

  .star-0 {
    background-position-y: -240px;
  }


</style>
