<template>
  <div class="single-support border-1px">
    <icon :type="support.type" class="icon"/>
    <span class="text">{{support.description}}</span>
  </div>
</template>

<script>
import Icon from "@/components/content/icon/Icon";
export default {
  name: "SingleSupport",
  components: {
    Icon
  },
  props: {
    support: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.single-support {
  display: flex;
  padding: 16px 12px;
  border-top: 1px solid rgba(7, 17, 27, .1);
  .icon {
    margin-right: 6px;
  }
  .text {
    font-size: 12px;
    font-weight: 100;
    color: var(--color-title);
    line-height: 16px;
  }
}

</style>
