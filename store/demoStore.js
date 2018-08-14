import request from 'service'

const requestUrl = {
  testUrl: 'bins/vcu54',
  prodUrl: 'prod001'
}

const state = {
  testData: '',
  count: 0,
  menuSelectName: '第一导航-用户信息'
}

const getters = {

}

const mutations = {
  authInfo (state, payload) {
    state.testData = payload.data
  },
  increment (state, payload) {
    state.count++
  }
}

const actions = {
  nuxtServerInit ({commit}, { req }) {
    if (req.session && req.session.user) {
      commit('user', req.session.user)
    }
  },
  testRequest ({ commit }, payload) {
    let params = {

    }
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          let data = await request.get(requestUrl.testUrl)
          commit({
            type: 'authInfo',
            data: data.data
          })
          resolve(data)
        } catch (error) {
          console.log(error)
        }
      })()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
