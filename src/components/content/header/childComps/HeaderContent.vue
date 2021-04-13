<template>
  <div class="content-wrapper" v-if="Object.keys(seller).length !== 0">
    <div class="avatar">
      <img :src="seller.avatar" alt="">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand">品牌</span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div class="support">
        <icon :type="seller.supports[0].type" class="icon"/>
        <span>{{seller.supports[0].description}}</span>
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
import {sellerData} from "@/common/mixin";
export default {
  name: "HeaderContent",
  components: {
    Icon
  },
  mixins: [sellerData],
  computed: {
    SLength() {
      return this.seller.supports.length
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
    display: flex;
    align-items: center;
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

  .icon {
    margin-right: 4px;
  }

</style>
