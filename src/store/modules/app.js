import {
  getBreadCrumbList,
  getMenuByRouter,
  getHomeRoute,
  localSave,
  localRead
} from '@/libs/util'
import routers from '@/router/routers'
import config from '@/config'
const { homeName } = config

const state = {
  breadCrumbList: [],
  homeRoute: {},
  local: localRead('local')
}

const getters = {
  menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access)
}

const mutations = {
  setBreadCrumb(state, route) {
    state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
  },
  setHomeRoute(state, routes) {
    state.homeRoute = getHomeRoute(routes, homeName)
  },
  setLocal(state, lang) {
    localSave('local', lang)
    state.local = lang
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
