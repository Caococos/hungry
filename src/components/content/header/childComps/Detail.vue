<template>
  <div class="detail" v-if="Object.keys(seller).length !== 0 && this.isShow">
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <star :number="seller.score" class="star"/>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <div class="support">
          <ul>
            <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
              <icon :size="16" :type="item.type" class="icon"/>
              <span>{{item.description}}</span>
            </li>
          </ul>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{seller.bulletin}}</p>
        </div>
      </div>
    </div>
    <div class="detail-close">
      <i class="icon-close" @click="closeDetail"></i>
    </div>
  </div>
</template>

<script>
import Star from "@/components/content/star/Star";
import Icon from "@/components/content/icon/Icon";
export default {
  name: "Detail",
  components: {
    Star,
    Icon
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    this.$bus.$on('showDetail',  () => {
      this.isShow = true  //订阅总线发过来的事件，并展示Detail页面
    })
  },
  methods: {
    closeDetail() {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
  .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(7, 17 ,27, 0.8);
    /*overflow: auto;     如果内容被剪修。浏览器显示滚动条    */
  }

  .detail-wrapper {
    min-height: 100%;
    padding: 0 36px;
  }

  .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
  }

  .name {
    text-align: center;
    font-size: 16px;
  }

  .star {
    background-position-x: center;
    margin-top: 14px;
    padding: 2px 0;
  }

  .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0;
    clear: both;
    font-size: 32px;
  }

  .title {
    display: flex;
    margin: 28px 0 24px;
  }

  .text {
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
  }

  .line {
    position: relative;
    flex: 1;
    top: 6px;
    border-top: 1px solid rgba(255, 255, 255, .2);
  }

  .support-item {
    padding: 0 12px;
    margin-bottom: 12px;
  }

  .icon {
    margin-right: 12px;
  }

  .content {
    font-size: 12px;
    line-height: 24px;
  }


</style>
