<template>
  <div class="total-rating">
    <div class="overview">
      <div class="overview-left">
        <div class="score">{{ seller.score }}</div>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家{{seller.rankRate}}%</div>
      </div>
      <div class="overview-right">
        <div class="score-wrapper">
          <span class="title">服务态度</span>
          <star-single class="star"  :size="36" :score="seller.foodScore"/>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="score-wrapper">
          <span class="title">商品评分</span>
          <star-single :size="36" :score="seller.foodScore"/>
          <span class="score">{{seller.foodScore}}</span>
        </div>
        <div class="delivery-wrapper">
          <span class="title">送达时间</span>
          <span class="delivery">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {sellerData} from "@/common/mixin";
import StarSingle from "@/components/content/starSingle/StarSingle";

export default {
  name: "ComprehensiveRating",
  components: {
    StarSingle
  },
  mixins: [sellerData]
}
</script>

<style scoped>
.total-rating {
  /*align-items: center;*/
}

.overview {
  display: flex;
  padding: 18px 0;
}

.overview-left {
  width: 137px;
  border-right: 1px solid rgba(7, 17, 27, .1);
  text-align: center;
}

.score {
  margin-bottom: 6px;
  font-size: 24px;
  line-height: 28px;
  color: rgb(255, 153, 0);
}

.overview-left .title {
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--color-title);
  line-height: 12px;
}

.rank {
  font-size: 10px;
  color: var(--color-tint);
  line-height: 10px;
}

.overview-right {
  flex: 1;
  padding: 0 24px;
}

.score-wrapper {
  display: flex;
  margin-bottom: 8px;
}

.overview-right .title {
  font-size: 12px;
  color: var(--color-title);
  line-height: 18px;
}

.star {
  margin: 0 12px;
}

.score-wrapper .score {
  font-size: 12px;
  line-height: 18px;
}

.delivery-wrapper {
  font-size: 12px;
  color: var(--color-title);
}

.delivery {
  margin-left: 12px;
  color: var(--color-tint);
}

</style>
