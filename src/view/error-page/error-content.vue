<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="code">
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <back-btn-group class="back-btn-group" />
    </div>
  </div>
</template>

<script>
import backBtnGroup from './back-btn-group.vue'

export default {
  name: 'ErrorContent',
  components: {
    backBtnGroup
  },
  props: {
    code: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
@import './error.less';
</style>
