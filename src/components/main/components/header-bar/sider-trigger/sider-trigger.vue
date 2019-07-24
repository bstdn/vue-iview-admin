<template>
  <a type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']" @click="handleChange"><Icon :type="icon" :size="size" /></a>
</template>

<script>
export default {
  name: 'SiderTrigger',
  props: {
    collapsed: Boolean,
    icon: {
      type: String,
      default: 'navicon-round'
    },
    size: {
      type: Number,
      default: 26
    }
  },
  methods: {
    handleChange() {
      this.$emit('on-change', !this.collapsed)
    }
  }
}
</script>

<style lang="less">
@import './sider-trigger.less';
</style>
