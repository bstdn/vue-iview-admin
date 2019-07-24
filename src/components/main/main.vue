<template>
  <Layout style="height: 100%" class="main">
    <Sider v-model="collapsed" hide-trigger collapsible :width="256" :collapsed-width="64" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu ref="sideMenu" accordion :active-name="$route.name" :collapsed="collapsed" :menu-list="menuList" @on-select="turnToPage">
        <div class="logo-con">
          <img v-show="!collapsed" key="max-logo" :src="maxLogo">
          <img v-show="collapsed" key="min-logo" :src="minLogo">
        </div>
      </side-menu>
    </Sider>
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
import SideMenu from './components/side-menu'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'

export default {
  name: 'Main',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo
    }
  },
  computed: {
    menuList() {
      return this.$store.getters['app/menuList']
    }
  },
  methods: {
    turnToPage(route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    }
  }
}
</script>

<style lang="less">
@import './main.less';
</style>
