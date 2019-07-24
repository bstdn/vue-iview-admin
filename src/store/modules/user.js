import { login, getUserInfo } from '@/api/user'
import { setToken, getToken } from '@/libs/util'

const state = {
  username: '',
  userId: '',
  avatarImgPath: '',
  token: getToken(),
  access: '',
  hasGetInfo: false
}

const getters = {
}

const mutations = {
  setAvatar(state, avatarPath) {
    state.avatarImgPath = avatarPath
  },
  setUserId(state, id) {
    state.userId = id
  },
  setUsername(state, name) {
    state.username = name
  },
  setAccess(state, access) {
    state.access = access
  },
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  setHasGetInfo(state, status) {
    state.hasGetInfo = status
  }
}

const actions = {
  handleLogin({ commit }, { username, password }) {
    username = username.trim()
    return new Promise((resolve, reject) => {
      login({
        username,
        password
      }).then(res => {
        const data = res.data
        commit('setToken', data.token)
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
          const data = res.data
          commit('setAvatar', data.avatar)
          commit('setUsername', data.name)
          commit('setUserId', data.user_id)
          commit('setAccess', data.access)
          commit('setHasGetInfo', true)
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
