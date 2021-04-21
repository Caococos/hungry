<template>
  <div class="ratings-info">
    <rating-single v-if="needShow(rating.rateType, rating.text)" :rating="rating" v-for="(rating, index) in ratings" :key="index" class="rating-single"/>
  </div>
</template>

<script>
import RatingSingle from "@/views/ratings/childComps/RatingSingle";
import {ratingControl, ratingData} from "@/common/mixin";
export default {
  name: "RatingsInfo",
  components: {
    RatingSingle
  },
  mixins: [ratingData, ratingControl],
  methods: {
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      }
      if (this.selectType === 2) {
        return true;
      } else {
        return type === this.selectType;
      }
    }
  }
}
</script>

<style scoped>
.rating-single:last-child {
  border: 0;
}

</style>
