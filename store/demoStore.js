import request from 'service'

const requestUrl = {
  testUrl: 'test001',
  prodUrl: 'prod001'
}

const state = {
  testData: '',
  count: 0
}

const getters = {

}

const mutations = {
  setTestData (state, payload) {
    state.testData = payload.data
  },
  increment (state, payload) {
    state.count++
  }
}

const actions = {
  testRequestGet: async ({ commit }, payload) => {
    let params = {}
    try {
      let data = await request.get(requestUrl.testUrl, params)
      commit({
        type: 'setTestData',
        data: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
