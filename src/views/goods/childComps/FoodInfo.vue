<template>
  <div class="food-info" v-if="Object.keys(food).length !== 0">
        <h1 class="title" ref="title">{{food.name}}</h1>
        <ul>
          <li class="food-item" v-for="(food, index) in food.foods" :key="index">
            <div class="icon"><img :src="food.icon" alt="" ></div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p  v-show="food.description" class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}</span>
              </div>
              <div class="price">
                <span class="nowPrice">￥{{food.price}}</span>
                <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
            </div>
            <cart-control class="cart-control" :food="food"/>
          </li>
        </ul>
  </div>
</template>

<script>
import CartControl from "@/views/goods/childComps/CartControl";
export default {
  name: "FoodInfo",
  components: {
    CartControl
  },
  props: {
    food: {
      type: Object,
      default() {}
    }
  },
}
</script>

<style scoped>
.title {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background-color: #f3f5f7;
}

.food-item {
  position: relative;
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(7, 17, 27, .1);
}

.food-item:last-child {
  border: 0;
  margin-bottom: 0;
}

.icon {
  flex: 0 0 57px;
  margin-right: 10px;
}

.icon img {
  width: 57px;
}

.content {
  flex: 1;
}

.name {
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}

.desc, .extra {
  margin-bottom: 8px;
  line-height: 10px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.count {
  margin-right: 12px;
}

.price {
  font-weight: 700;
  line-height: 24px;
}

.nowPrice {
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}

.oldPrice {
  text-decoration: line-through;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.cart-control {
  position: absolute;
  right: 0;
  bottom: 12px;
}

</style>
