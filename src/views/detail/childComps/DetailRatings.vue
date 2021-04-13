<template>
  <div class="detail-ratings">
    <div class="title">商品评价</div>
    <rating-select :desc="desc"
                   :only-content="onlyContent"
                   :ratings="detailFood.ratings" @content-total="contentTotal"/>
    <div class="rating-wrapper" v-show="detailFood.ratings && detailFood.ratings.length">
      <ul>
        <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in detailFood.ratings"
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
  </div>
</template>

<script>
import RatingSelect from "@/components/content/ratingselect/RatingSelect";
import {detailData} from "@/common/mixin";
import {formatDate} from "@/common/utils";
import {mapState} from "vuex";
export default {
name: "DetailRatings",
  components: {
  RatingSelect
  },
  data() {
    return {
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  mixins: [detailData],
  computed: {
    ...mapState(['selectType'])
  },
  methods: {
    contentTotal(onlyContent) {
      this.onlyContent = !onlyContent
      this.$nextTick(() => {
        // this.$refs.scroll.refresh()
      })
    },
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
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh-mm');
    }
  }
}
</script>

<style scoped>
.detail-ratings {
  padding: 18px;
}

.title {
  margin-bottom: 6px;
}

.rating-wrapper {
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
