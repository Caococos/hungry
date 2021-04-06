<template>
  <div class="menu"  v-if="goods.length !== 0">
    <scroll class="wrapper" ref="scroll">
      <ul>
        <li v-for="(item, index) in goods"
            :key="index" class="menu-item"
            @click="menuClick(index)"
            :class="{active: index === currentIndex}">
        <span class="text">
          <icon v-show="item.type > -1" :type="item.type" class="icon"/>
          {{item.name}}</span>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Icon from "@/components/content/icon/Icon";
import Scroll from "@/components/common/scroll/Scroll";
import {mapState} from "vuex"
export default {
  name: "Menu",
  components: {
    Icon,
    Scroll
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: mapState([
    'currentIndex',
    "themeTops"
  ]),
  methods: {
    menuClick(index) {  //2.通过监听点击事件，将点击项目的标识index赋值给项目变量(另外还可以给点击动态改变颜色)
    this.$store.commit("changeIndex", index)
    },
  }
}
</script>

<style scoped>
  .menu {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
  }

  .menu-item {
    display: flex;
    text-align: center;
    align-items: center;
    width: 80px;
    height: 54px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }

  .menu-item:last-child {
    border: 0;
  }

  .wrapper {
    height: 100%;
  }

  .text {
    display: flex;
    width: 80px;
    font-size: 12px;
  }

  .icon {
    margin-right: 2px;
  }

  .active {
    background-color: #fff;
  }

</style>
