import request from '@/util/request'

const state = {
  access_token: null,
  expires_in: 3600,
  token_type: 'bearer',
  username: null,
  avatar: null
}
const getters = {
  getAccessToken: (state: { access_token: any }) => {
    return state.access_token
  },
  getAvatar: (state: { avatar: any }) => state.avatar,
  getUsername: (state: { username: any }) => state.username
}
const actions = {
  login({ commit, dispatch }: any, { username, password }: any) {
    console.log();
    return request({
      url: '/auth/login',
      method: 'post',
      data: {
        username,
        password
      }
    }).then((resp) => {
      commit('SET_LOGIN', resp)
      dispatch('fetchProfile')
    })
  },
  logout({ commit }: any) {
    commit('SET_ACCESS_TOKEN', null)
  },
  // get current login user info

  fetchProfile({ commit }: any) {
    return request({
      url: '/me',
      method: 'get'
    }).then(({ data }) => {
      commit('SET_LOGIN_PROFILE', data)
    })
  }
}
const mutations = {
  SET_LOGIN(state: { access_token: any; expires_in: any }, { access_token, expires_in }: any) {
    state.access_token = access_token
    state.expires_in = expires_in
  },
  SET_ACCESS_TOKEN(state: { access_token: any }, token: any) {
    state.access_token = token
  },
  SET_LOGIN_PROFILE(state: { username: any; avatar: any }, payload: { username: any; avatar: any }) {
    state.username = payload.username
    state.avatar = payload.avatar
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
