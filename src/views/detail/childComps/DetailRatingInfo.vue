<template>
  <div class="detail-ratings-info">
    <ul>
      <li v-show="needShow(rating.rateType, rating.text)" v-for="rating in detailFood.ratings"
          class="rating-item">
        <div class="user">
          <span class="name">{{rating.username}}</span>
          <img class="avatar" width="12" height="12" :src="rating.avatar">
        </div>
        <div class="time">{{rating.rateTime | formatDate}}</div>
        <p class="text">
          <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>
          {{rating.text}}</p>
      </li>
    </ul>
    <div class="no-rating" v-show="!detailFood.ratings || !detailFood.ratings.length">
      暂无评价
    </div>
  </div>
</template>

<script>
import {ratingControl} from "@/common/mixin";
import {formatDate} from "@/common/utils";

export default {
  name: "DetailRatingInfo",
  props: {
    detailFood: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mixins: [ratingControl],
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
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }

}
</script>

<style scoped>
.detail-ratings-info {
  padding: 0 18px;
}
.rating-item {
  position: relative;
  padding: 16px 0;
}
.user {
  position: absolute;
  right: 0;
  top: 16px;
  line-height: 12px;
  font-size: 0;
}

.name {
  font-size: 10px;
  display: inline-block;
  vertical-align: top;
  margin-right: 6px;
  color: rgb(147, 153, 159);
}
.avatar {
  border-radius: 50%;
}
.time {
  line-height: 12px;
  font-size: 10px;
  margin-bottom: 6px;
  color: rgb(147, 153, 159);
}
.text {
  line-height: 16px;
  font-size: 12px;
  color: rgb(7, 17, 27);
}
.icon-thumb_up, .icon-thumb_down {
  margin-right: 4px;
  line-height: 18px;
  font-size: 12px;
}
.icon-thumb_up {
  color: rgb(0, 160, 220);
}
.icon-thumb_down {
  color: rgb(147, 153, 159);
}
.no-rating {
  padding: 16px 0;
  font-size: 12px;
  color: rgb(147, 153, 159);
}

</style>
