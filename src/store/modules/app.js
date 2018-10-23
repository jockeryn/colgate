const state = {
  pr_k: 'usVnZ9avAGG3a5ZMMwN0bD3aWwZiBhrjqJK2loLEMXg%3D',
  pu_k: '519c9f1a911908a290b4c3cdb33e22bae0a451e97913428de598f9d8e25df680',
  u_type: typeof jsVars !== 'undefined' ? jsVars.segmentsIds.includes('658') ? 'Admin' : 'User' : 'Admin',
  user_id: typeof jsVars !== 'undefined' ? jsVars.user.user_id : 930170,
  mercaderista_id: null,
  sidebar: {
    opened: false,
    withoutAnimation: false
  },
  config: {
    googleMaps: {
      apiKey: ''
    },
    windowMatchSizeLg: '(min-width: 992px)',
    palette: {
      primary: '#4ae387',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd'
    }
  },
  isLoading: true
}

const mutations = {
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  'TOGGLE_WITHOUT_ANIMATION' (state, value) {
    state.sidebar.withoutAnimation = value
  },
  setMercaderista (state, value) {
    state.mercaderista_id = value
  }
}

const getters = {
  getMercaderista (state) { return state.mercaderista_id }
}

const actions = {
  isToggleWithoutAnimation ({ commit }, value) {
    commit('TOGGLE_WITHOUT_ANIMATION', value)
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
}
