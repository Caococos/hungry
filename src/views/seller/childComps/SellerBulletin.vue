<template>
  <div class="bulletin">
    <div class="content">
      <h1 class="title">公告与活动</h1>
      <div class="desc">{{seller.bulletin}}</div>
    </div>
      <single-support v-for="(item, index) in seller.supports" :support="item" :key="index"/>
  </div>
</template>

<script>
import SingleSupport from "@/views/seller/childComps/SingleSupport";
export default {
  name: "SellerBulletin",
  components: {
    SingleSupport
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bulletin {
  padding: 0 18px;
  .content {
    padding: 18px 0;
    //border-bottom: 1px solid rgba(7, 17, 27, .1);
    .title {
      font-weight: 400;
      font-size: 14px;
      color: var(--color-title);
      line-height: 14px;
    }
    .desc {
      margin: 8px 12px 0;
      font-size: 12px;
      font-weight: 100;
      color: var(--color-high-text);
      line-height: 24px;
    }
  }
}

</style>
