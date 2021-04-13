<template>
  <div class="detail-base-info">
    <div class="title">商品介绍</div>
    <div class="desc">{{detailFood.info}}</div>
  </div>
</template>

<script>
import {detailData} from "@/common/mixin";

export default {
  name: "DetailBaseInfo",
  mixins: [detailData]
}
</script>

<style scoped>
.detail-base-info {
  padding: 18px;
}

.title {
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 14px;
  color: var(--color-title);
}

.desc {
  margin: 0 8px;
  font-size: 12px;
  line-height: 24px;
  color: var(--color-text);
}

</style>
