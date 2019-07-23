<template>
  <Layout style="height: 100%" class="main">
    <Layout>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <keep-alive>
              <router-view />
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="less">
@import './main.less';
</style>
