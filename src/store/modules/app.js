import {
  getMenuByRouter
} from '@/libs/util'
import routers from '@/router/routers'

const state = {
}

const getters = {
  menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access)
}

const mutations = {
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
