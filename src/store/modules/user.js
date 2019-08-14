import { login, getUserInfo, logout } from '@/api/user'
import { setToken, getToken, removeToken } from '@/libs/util'

const state = {
  userInfo: {},
  token: getToken()
}

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  handleLogin({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password
      }).then(res => {
        const { data } = res
        commit('setUserInfo', data)
        commit('setToken', data.token)
        setToken(data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUserInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      try {
        getUserInfo(state.token).then(res => {
          const { data } = res
          commit('setUserInfo', data)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  handleLogOut({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('setToken', '')
        removeToken()
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('setToken', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
