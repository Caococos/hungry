<template>
  <div id="main-nav-bar">
    <tab-control :titles="['商品', '评价', '店家']" @tabClick="tabClick"/>
  </div>
</template>

<script>
import TabControl from "@/components/content/tabControl/TabControl";
export default {
  name: "MainNavBar",
  components: {
    TabControl
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.$router.replace({name: 'goods'})
          break
        case 1:
          this.$router.replace({name: 'ratings'})
          break
        case 2:
          this.$router.replace({name: 'seller'})
      }

    }
  }
}
</script>

<style scoped>
  #main-nav-bar {
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

</style>
