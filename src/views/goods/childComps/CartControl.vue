<template>
  <div class="cart-control" v-if="Object.keys(food).length !== 0">
    <transition name="move">
      <div class="decrease icon-remove_circle_outline"
           v-show="foodCount > 0"
           @click="removeCart">
        <!--      <span class="icon-remove_circle_outline inner"></span>-->
      </div>
    </transition>
    <div class="count">{{foodCount}}</div>
    <div class="increase icon-add_circle" @click="addToCart"></div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from "vuex"
import {foodCount} from "@/common/mixin";
export default {
  name: "CartControl",
  props: {
    food: {  //food用来添加食物信息
      type: Object,
      default() {
        return {}
      }
    }
  },
  mixins: [foodCount],
  computed: {
    ...mapState([
      'selectFood',
      'balls'
    ]),
  },
  methods: {
    ...mapGetters(['totalCount']),
    ...mapActions(['addCart', 'removeToCart']),
    ...mapMutations([
      'changeShow',
      'changeDropBall'
    ]),
    addToCart(event) {
      const product = {}
      product.name = this.food.name
      product.price = this.food.price
      this.addCart(product).then(res => {
        this.$toast.show(res)
        // throttling(() => this.$toast.show(res), 5000, true)()
      })

      //  小球动画操作
      for (let i = 0; i < this.balls.length; i++  ) {
        if (!this.balls[i].show) {
          this.changeShow({index: i, isShow: true, el: event.target})
          this.changeDropBall(this.balls[i])
          return;
        }
      }
    },
    removeCart() {
      const product = {}
      product.name = this.food.name
      this.removeToCart(product).then(res => {
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style scoped>
.cart-control {
  display: flex;
  align-items: center;
}

.decrease, .increase {
  padding: 6px;
  border-radius: 50%;
  color: #009fdb;
  font-size: 24px;
}

.increase {
  position: relative;
}

.decrease {
  transition: all 0.4s linear;
  opacity: 1;
  transform: translate3d(0, 0, 0) rotate(0);
}

.move-enter, .move-leave-to {
  opacity: .2;
  transform: translate3d(48px, 0, 0) rotate(180deg);
}

.count {
  padding: 0 2px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

</style>
