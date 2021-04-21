<template>
  <div class="rating-single border-1px" v-if="Object.keys(rating).length !== 0">
    <div class="avatar">
      <img :src="rating.avatar" width="28px" height="28px" alt="">
    </div>
    <div class="content">
      <div class="info">
        <h1 class="name">{{rating.username}}</h1>
        <star-single class="star" :size="24" :score="rating.score"/>
        <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
      </div>
      <p class="text">{{rating.text}}</p>
      <div class="recommend" v-show="rating.recommend && rating.recommend.length">
        <span class="icon-thumb_up"></span>
        <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="time">
      {{rating.rateTime | formatDate}}
    </div>
  </div>
</template>

<script>
import StarSingle from "@/components/content/starSingle/StarSingle";
import {formatDate} from "@/common/utils";
export default {
  name: "RatingSingle",
  components: {
    StarSingle
  },
  props: {
    rating: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<style scoped>
.rating-single {
  display: flex;
  position: relative;
  padding: 18px;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
}

.avatar img {
  margin-right: 12px;
  border-radius: 50%;
}

.name {
  font-size: 10px;
  color: var(--color-title);
  line-height: 12px;
}

.star {
  display: inline-block;
  margin: 4px 6px 0 0;
}

.delivery {
  font-size: 10px;
  font-weight: 100;
  color: var(--color-tint);
  line-height: 12px;
}

.text {
  margin: 6px 0 3px 0;
  font-size: 12px;
  color: var(--color-title);
  line-height: 12px;
}

.icon-thumb_up {
  font-size: 12px;
  color: rgb(0, 160, 220);
  line-height: 16px;
}

.item {
  padding: 0 6px;
  margin-right: 8px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 2px;
  font-size: 9px;
  color: var(--color-tint);
  line-height: 16px;
}

.time {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 10px;
  font-weight: 100;
  color: var(--color-tint);
  line-height: 12px;
}

</style>
