<template>
  <div class="content-wrapper" v-if="Object.keys(content).length !== 0">
    <div class="avatar">
      <img :src="content.avatar" alt="">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand">品牌</span>
        <span class="name">{{content.name}}</span>
      </div>
      <div class="description">
        {{content.description}}/{{content.deliveryTime}}分钟送达
      </div>
      <div class="support">
        <icon :type="content.supports[0].type"/>
        <span>{{content.supports[0].description}}</span>
      </div>
    </div>
    <div class="supper-count" @click="showDetail">
      <span class="support-text">{{SLength}}个</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/content/icon/Icon";
export default {
  name: "HeaderContent",
  components: {
    Icon
  },
  props: {
    content: {
      type: Object,
      default() {
        return {};   //检测是否有数据传过来，如果没有组件不会渲染
      }
    }
  },
  computed: {
    SLength() {
      return this.content.supports.length
    }
  },
  methods: {
    showDetail() {
      this.$bus.$emit('showDetail')
    }
  }
}
</script>

<style scoped>
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
  }

  .avatar {
    display: inline-block;
  }

  .avatar img {
    width: 64px;
    height: 64px;
    border-radius: 2px;
  }

  .content {
    display: inline-block;
    margin-left: 16px;
  }

  .title {
    margin: 2px 0 8px 0;
  }

  .brand {
    display: inline-block;
    margin-right: 6px;
    width: 30px;
    height: 18px;
    border-radius: 2px;
    line-height: 18px;
    text-align: center;
    background-color: #ff4010;
    font-size: 12px;
    font-weight: 500;
  }

  .description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .support {
    font-size: 10px;
  }

  .supper-count {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 10px;
  }

  .support-text {
    vertical-align: middle;

  }

  .icon-keyboard_arrow_right {
    margin-left: 2px;
    vertical-align: middle;
  }

</style>
