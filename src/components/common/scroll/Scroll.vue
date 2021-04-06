<template>
  <div ref="wrapper">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {  //是否监听滚动
      type: Number,
      default: 0
    },
    pullUpLoad: {  //是否下拉加载更多
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const wrapper = this.$refs.wrapper
    this.scroll = new BScroll(wrapper, {
      click: true, //除button之外的元素是否可以点击
      probeType: this.probeType,  //是否监听滚动
      // 值为0,1：都是不侦测实时的位置
      // 值为2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
      // 3：只要是滚动，都侦测
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }
    // 监听上拉到顶部事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {  //离开路由页面保存当前浏览位置(因BScroll组件而使用)
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>
<!--scoped:作用域，只会在当前组件内起效果-->
<style scoped>
</style>
