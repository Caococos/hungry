<template>
  <div class="icon">{{discountType}}</div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: Number,
      default: -1
    }
  },
  computed: {
    discountType() {
      switch (this.type) {
        case 0:
          return '减'
        case 1:
          return '折'
        case 2:
          return '特'
        case 3:
          return '票'
        case 4:
          return '保'
      }
    }
  }
}
</script>

<style scoped>
  .icon {
    display: inline-block;
    margin-right: 4px;
    width: 14px;
    height: 14px;
    padding: 1px;
    border-radius: 2px;
    text-align: center;
    background-color: #fff;
    color: red;
    font-size: 10px;
  }

</style>
