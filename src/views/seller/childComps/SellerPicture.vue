<template>
  <div class="picture">
    <h1 class="title">商家实景</h1>
    <scroll class="wrapper" ref="scroll" :scroll-t="false">
      <ul class="pic-list" :style="{width: 126 * pics.length - 6 + 'px'}">
        <li class="pic-item" v-for="pic in pics">
          <img :src="pic" alt="" width="120" height="90">
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "SellerPicture",
  components: {
    Scroll
  },
  props: {
    pics: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.scroll.scroll);
    })
  },
  computed: {
    ulWidth() {

    }
  }
}
</script>

<style scoped lang="scss">
.picture {
  padding: 18px;
  .title {
    font-size: 14px;
    color: var(--color-title);
    line-height: 14px;
    font-weight: 400;
  }
  .wrapper {
    width: 339px;
    overflow: hidden;
    .pic-list {
      display: flex;
      margin-top: 12px;
      .pic-item {
        width: 120px;
        height: 90px;
        margin-right: 6px;
      }
    }
  }
}

</style>
