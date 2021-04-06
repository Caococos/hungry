<template>
  <div class="ball-container">
    <transition v-for="(ball,index) in balls"
                :key="index" name="drop"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
      <div class="ball" v-show="ball.show">
        <div class="inner inner-hook"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
  name: "Ball",
  computed: {
    ...mapState([
      'balls',
      'dropBall'
    ])
  },
  methods: {
    ...mapMutations(['changeShow', 'changeDropBall']),
    beforeEnter (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          //getBoundingClientRect返回值是一个 DOMRect 对象, 此包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。
          //除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22)
          //小球外层控制y轴的运动轨迹,translate3d()可以开启硬件加速
          // el.style.display = ''
          el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
          el.style.transform = `translate3d(0, ${y}px, 0)`
          //内层小球控制x轴运动轨迹,内外层运动方式是不一样的, y轴贝塞尔曲线, x轴匀速.
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
          inner.style.transform = `translate3d(${x}px, 0, 0)`
        }
      }
    },
    enter (el, done) {
      // 触发浏览器重绘
      let rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0, 0, 0)'
        el.style.transform = 'translate3d(0, 0, 0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = `translate3d(0, 0, 0)`
        inner.style.transform = `translate3d(0, 0, 0)`
        el.addEventListener('transitionend', done);
      })
    },
    afterEnter (el) {
      // 删除数组第一个元素, 并返回第一个元素,因对象都是指向地址,所以操作dropBall数组也就操作了balls数组
      let ball = this.dropBall.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
.ball {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  /*background: rgb(220, 0, 70);*/
}

.drop-enter-active {
  transition: all .5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgb(0, 160, 220);
  transition: all .5s linear;
}

</style>
