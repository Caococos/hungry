<template>
  <div class="seller-overview">
    <div class="overview border-1px">
      <h1 class="title">{{seller.name}}</h1>
      <div class="desc">
        <star-single :size="36" :score="seller.score"/>
        <span class="text">({{seller.ratingCount}})</span>
        <span>月售{{seller.sellCount}}单</span>
      </div>
    </div>

    <div class="remark">
      <div class="content">
        <h2>起送价</h2>
        <span class="stress">{{seller.minPrice}}</span>元
      </div>
      <div class="content">
        <h2>商家配送</h2>
        <span class="stress">{{seller.deliveryPrice}}</span>元
      </div>
      <div class="content">
        <h2>平均配送时间</h2>
        <span class="stress">{{seller.deliveryTime}}</span>分钟
      </div>
    </div>

    <div class="favorite" @click="toggleFavorite">
      <span class="icon-favorite" :class="{'active':favorite}"></span>
      <span class="text">{{favoriteText}}</span>
    </div>
  </div>
</template>

<script>
import StarSingle from "@/components/content/starSingle/StarSingle";
import {loadFromLocal, saveToLocal} from "@/common/store";
export default {
  name: "SellerOverview",
  components: {
    StarSingle
  },
  data() {
    return {
      favorite: (() => {
        return loadFromLocal(this.seller.id, 'favorite', false);
      })()
    };
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    favoriteText() {
      return this.favorite ? '已收藏' : '收藏';
    }
  },
  methods: {
    toggleFavorite() {
      this.favorite = !this.favorite;
      saveToLocal(this.seller.id, 'favorite', this.favorite);
    }
  }
}
</script>

<style scoped lang="scss">
.seller-overview {
  position: relative;
  .overview {
    padding: 18px;
    border-bottom: 1px solid rgb(7, 17, 27, .1);
    .title {
      font-weight: 400;
      font-size: 14px;
      color: var(--color-title);
      line-height: 14px;
    }
    .desc {
      display: flex;
      margin-top: 8px;
      font-size: 10px;
      color: var(--color-text);
    }
    .text {
      margin: 0 12px 0 8px;
    }
  }

  .remark {
    display: flex;
    justify-content: space-around;
    padding: 18px;
    .content{
      flex: 1;
      font-size: 10px;
      text-align: center;
      h2 {
        margin-bottom: 4px;
        font-weight: 400;
        color: var(--color-tint);
        line-height: 10px;
      }
      .stress {
        font-size: 24px;
        color: var(--color-title);
        line-height: 24px;
      }
    }
    .content:nth-child(2) {
      border-left: 1px solid rgb(7, 17, 27, .1);
      border-right: 1px solid rgb(7, 17, 27, .1);
    }
  }

  .favorite {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 36px;
    text-align: center;
    .icon-favorite {
      display: block;
      margin-bottom: 4px;
      font-size: 24px;
      line-height: 24px;
      color: #d4d6d9;
    }
    .text {
      font-size: 10px;
      line-height: 10px;
      color: var(--color-text);
    }
    .active {
      color: var(--color-high-text);
    }
  }
}



</style>
