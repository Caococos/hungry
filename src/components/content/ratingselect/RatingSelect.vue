<template>
  <div class="rating-select">
    <div class="rating-type border-1px">
      <span class="block positive" @click="select(2)" :class="{'active':selectType===2}">{{desc.all}}<span
        class="count">{{rating.length}}</span></span>
      <span class="block positive" @click="select(0)" :class="{'active':selectType===0}">{{desc.positive}}<span
        class="count">{{positives.length}}</span></span>
      <span class="block negative" @click="select(1)" :class="{'active':selectType===1}">{{desc.negative}}<span
        class="count">{{negatives.length}}</span></span>
    </div>
    <div class="switch" @click="switchOnlyContent" :class="{'on': onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {ratingControl} from "@/common/mixin";

  const POSITIVE = 0;
  const NEGATIVE = 1;

  export default{
    props: {
      rating: {
        type: Array,
        default() {
          return [];
        }
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    mixins: [ratingControl],
    computed: {
      positives() {
        return this.rating.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negatives() {
        return this.rating.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    },
    methods: {
      ...mapMutations(['changeType', 'changeContent']),
      select(type) {
        this.changeType(type)  //改变store中的变量
      },
      switchOnlyContent() {
        this.changeContent()   //通过mutations在vuex中改变改变的值
      }
    }
  };
</script>

<style scoped>
.rating-type {
  font-size: 20px;
  padding: 18px 0;
  margin: 0 18px;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
}
.block {
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  border-radius: 1px;
  color: rgb(77, 85, 93);
}
.active {
  color: #fff;
}
.count {
  font-size: 8px;
  margin-left: 2px;
  line-height: 16px;
}
.positive {
  background: rgba(0, 160, 220, .2);
}
.active {
  background: rgb(0, 160, 220);
}
.negative {
  background: rgba(77, 85, 93, .2);
}
.active {
  background: rgb(77, 85, 93);
}
.switch {
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
  color: rgb(147, 153, 159);
}
.icon-check_circle {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: 24px;
}
.text {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}

.on .icon-check_circle {
  color: #00c850;
}
</style>
