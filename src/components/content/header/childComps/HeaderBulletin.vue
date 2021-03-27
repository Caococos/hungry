<template>
  <div class="bulletin-wrapper" v-if="Object.keys(bulletin).length !== 0" @click="showDetail">
    <span class="title">公告</span>
    <span class="text">{{bulletin.bulletin}}</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
</template>

<script>
export default {
  name: "HeaderBulletin",
  props: {
    bulletin: {
      type: Object,
      default() {
        return {}   //检测是否有数据传过来，如果没有组件不会渲染
      }
    }
  },
  methods: {
    showDetail() {
      this.$bus.$emit('showDetail')  //向Detail组件发送事件
    }
  }
}
</script>

<style scoped>
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
  }

  .title {
    display: inline-block;
    margin-right: 4px;
    padding-top: 1px;
    width: 28px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    font-size: 10px;
    font-weight: 600;
    background-color: #fff;
    color: #000;
  }

  .icon-keyboard_arrow_right {
    position: absolute;
    top: 9px;
    right: 8px;
    font-size: 10px;
  }

</style>
