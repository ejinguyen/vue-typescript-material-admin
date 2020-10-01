import colors from 'vuetify/es5/util/colors'

const state = {
  mode: 'light',
  themeColor: 'pink'
}

// getters
const getters = {
  getThemeColor: (state: { themeColor: string | number }) => {
    return (colors as any)[state.themeColor].base
  }
}

// actions
const actions = {}

// mutations
const mutations = {
  setThemeColor(state: { themeColor: any }, payload: any) {
    state.themeColor = payload
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
