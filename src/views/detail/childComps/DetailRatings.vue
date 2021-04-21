<template>
  <div class="detail-ratings">
    <div class="title">商品评价</div>
    <rating-select :desc="desc"
                   :rating="detailFood.ratings"/>
    <detail-rating-info :detail-food="detailFood"/>
  </div>
</template>

<script>
import RatingSelect from "@/components/content/ratingselect/RatingSelect";
import DetailRatingInfo from "@/views/detail/childComps/DetailRatingInfo";
import {detailData} from "@/common/mixin";
export default {
name: "DetailRatings",
  components: {
    RatingSelect,
    DetailRatingInfo
  },
  data() {
    return {
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  mixins: [detailData]
}
</script>

<style scoped>
.detail-ratings {
  padding: 18px;
}

.title {
  margin-bottom: 6px;
}

</style>
