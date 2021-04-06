<template>
    <transition name="fold">
      <div class="cart-detail" v-show="isShow">
        <div class="header-list">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="emptyFoods">清空</span>
        </div>
        <scroll class="wrapper" ref="scroll">
          <ul>
            <li class="food" v-for="(food, index) in selectFood" :key="index">
              <span class="name">{{ food.name }}</span>
              <span class="price">{{food.price * food.count}}</span>
              <cart-control :food="food" class="cart-control"/>
            </li>
          </ul>
        </scroll>
      </div>
    </transition>
</template>

<script>
import CartControl from "@/views/goods/childComps/CartControl";
import Scroll from "@/components/common/scroll/Scroll";

import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "CartDetail",
  components: {
    CartControl,
    Scroll
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    refreshChange: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(['selectFood']),
    ...mapGetters(['totalCount']),
  },
  methods: {
    ...mapMutations(["clearCart"]),
    refresh() {
      this.$refs.scroll.refresh()
    },
    emptyFoods() {  //清除购物车
      if (this.selectFood.length !== 0) {
        this.clearCart()
      }
    }
  },
  watch: {
    totalCount: function() {  //增加商品后刷新购物车页面高度
      if (this.totalCount > 5) {
        this.$nextTick(() => {
          this.refresh()
        })
      }
    },
    refreshChange: function() {  //点击购物车刷新购物车页面高度
      this.$nextTick(() => {  //解决异步渲染问题
        this.refresh()
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-height: 217px;
  overflow: hidden;
}

.cart-detail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  /*动画样式*/
  transform: translate3d(0, -100%, 0);
  transition: all .4s;
  font-size: 14px;
  color: rgb(7, 17, 27);
  background-color: #fff;
}

.header-list {
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  background-color: #f3f5f7;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
}

.title {
  float: left;
  font-size: 14px;
  font-weight: 200;
}

.empty {
  float: right;
  font-size: 12px;
  color: rgb(0, 160, 220);
}

  /*购物车列表弹出动画*/
.fold-enter, .fold-leave-to {
  transform: translate3d(0, 0, 0);
}

.food {
  position: relative;
  padding: 12px 0;
  margin: 0 18px;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
}

.name {
  line-height: 24px;
}

.price {
  position: absolute;
  right: 90px;
  bottom: 12px;
  line-height: 24px;
  font-weight: 700;
  color: rgb(240, 20, 20);
}

.cart-control {
  position: absolute;
  right: 0;
  bottom: 7px;
}


</style>
