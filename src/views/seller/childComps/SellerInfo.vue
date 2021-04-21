<template>
  <div class="seller-info">
    <h1 class="title">商家信息</h1>
    <ul>
      <li class="item-info border-1px" v-for="(info, index) in infos" :key="index">{{info}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SellerInfo",
  props: {
    infos: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.seller-info {
  padding: 18px;
  .title {
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-title);
    line-height: 14px;
  }
  .item-info {
    padding: 16px 12px;
    font-size: 12px;
    font-weight: 100;
    color: var(--color-title);
    line-height: 16px;
    border-top: 1px solid rgba(7, 17, 27, .1);
  }
}

</style>
