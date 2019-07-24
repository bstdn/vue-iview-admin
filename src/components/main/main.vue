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
      <Header class="header-con">
        <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange">
          <user :user-avatar="userAvatar" />
          <language v-if="$config.useI18n" style="margin-right: 10px;" :lang="local" @on-lang-change="setLocal" />
          <fullscreen v-model="isFullscreen" style="margin-right: 10px;" />
        </header-bar>
      </Header>
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
import { mapMutations } from 'vuex'
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import User from './components/user'
import Language from './components/language'
import Fullscreen from './components/fullscreen'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import routers from '@/router/routers'

export default {
  name: 'Main',
  components: {
    SideMenu,
    HeaderBar,
    User,
    Language,
    Fullscreen
  },
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false
    }
  },
  computed: {
    userAvatar() {
      return this.$store.state.user.avatarImgPath
    },
    menuList() {
      return this.$store.getters['app/menuList']
    },
    local() {
      return this.$store.state.app.local
    }
  },
  watch: {
    '$route'(newRoute) {
      this.setBreadCrumb(newRoute)
      this.$refs.sideMenu.updateOpenName(newRoute.name)
    }
  },
  mounted() {
    this.setHomeRoute(routers)
    this.setBreadCrumb(this.$route)
    this.setLocal(this.$i18n.locale)
  },
  methods: {
    ...mapMutations('app', [
      'setBreadCrumb',
      'setLocal',
      'setHomeRoute'
    ]),
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
    },
    handleCollapsedChange(state) {
      this.collapsed = state
    }
  }
}
</script>

<style lang="less">
@import './main.less';
</style>
