<template>
  <div class="icon" :style="{color: color,
  backgroundColor: bgColor,
  width: size + 'px',
  height: size + 'px'}">
    {{discountType}}
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: Number,
      default: -1
    },
    size: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      color: '#fff',
      bgColor: '#f11313'
    }
  },
  computed: {
    discountType() {
      switch (this.type) {
        case 0:
          return '减'
        case 1:
          this.bgColor = '#018cc8'
          return '折'
        case 2:
          this.bgColor = '#00b53a'
          return '特'
        case 3:
          this.bgColor = '#8a0a82'
          this.color = '#fff'
          return '票'
        case 4:
          this.bgColor = '#fff'
          this.color = '#03b43e'
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
    line-height: 14px;
    /*padding: 1px;*/
    border-radius: 2px;
    text-align: center;
    font-size: 10px;
  }

</style>
