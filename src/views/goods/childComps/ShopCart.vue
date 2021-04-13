<template>
  <div class="root">
    <div class="shop-cart">
      <div class="content">
        <div class="content-left" @click="toCartList">
          <i class="icon-shopping_cart"
             :class="{'highlight': totalCount> 0}"></i>
          <div class="count" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="content-center">
          <div class="price" :class="{'highlight-text': totalPrice> 0}">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费￥{{seller.deliveryPrice}}元</div>
        </div>
        <div class="content-right" :class="{'highlight-pay': totalPrice >= 20}">
          <div class="pay">{{payDesc}}</div>
        </div>
      </div>
      <ball/>
      <cart-detail :is-show="listShow" :refresh-change="refresh">
      </cart-detail>>
    </div>
    <transparent-b-g v-show="listShow" @click.native="hideList"/>
  </div>

</template>

<script>
import Ball from "@/components/content/Ball";
import CartDetail from "@/views/goods/childComps/CartDetail";
import TransparentBG from "@/components/content/transparentBG/TransparentBG";

import {mapState, mapGetters} from "vuex"
export default {
  name: "ShopCart",
  components: {
    Ball,
    CartDetail,
    TransparentBG
  },
  data() {
    return {
      fold: true,
      refresh: 0,
    }
  },
  computed: {
    ...mapState([
      "selectFood",
      "dropBall",
      "seller"
      ]),
    ...mapGetters(['totalPrice', 'totalCount']),
    payDesc() {  //总价不同样式和信息不同
      if (this.totalPrice === 0) {
        return `￥${this.seller.minPrice}起送`;
      } else if (this.totalPrice < this.seller.minPrice) {
        let diff = this.seller.minPrice - this.totalPrice;
        return `还差￥${diff}起送`;
      } else {
        return '去结算';
      }
    },
    listShow () {
      if (!this.totalCount) {
        this.fold = true
        return false
      }
      return !this.fold
    }
  },
  methods: {
    toCartList() {
      if (!this.totalCount) {}
      else
        {
          this.fold = !this.fold
          this.refresh++
        }
    },
    hideList() {
      this.fold = true
    }
  }
}
</script>

<style scoped>
  .shop-cart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 48px;
    color: rgba(255, 255, 255, .4);
  }

  .content {
    display: flex;
    background-color: #141d27;
  }

  .content-center {
    display: flex;
    flex: 1;
    height: 48px;
    align-items: center;
  }

  .content-left {
    display: inline-block;
    position: relative;
    top: -10px;
    z-index: 1;
    background: #141d27;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  .icon-shopping_cart {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 44px;
    border-radius: 50%;
    background: #2b343c;
    text-align: center;
    font-size: 24px;
    transition: background-color 1s;
  }

  .price{
    padding: 4px 12px 4px 0;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 700;
  }

  .desc {
    margin-left: 12px;
    font-size: 10px;
  }

  .content-right {
    flex: 0 0 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    background-color: #2b333b;
  }

  .count {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 9px;
    font-weight: 700;
    border-radius: 16px;
    color: #fff;
    background-color: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4);
  }

  /*购物车高亮样式*/
  .highlight {
    background-color: rgb(0, 160, 220);
    color: #fff;
  }

  .highlight-text {
    color: #fff;
  }
  .highlight-pay {
    background-color: #00b43c;
    color: #fff;
  }



</style>
