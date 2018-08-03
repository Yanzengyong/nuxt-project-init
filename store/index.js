import Vue from 'vue'
import Vuex from 'vuex'
import DemoStore from './demoStore'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    DemoStore
  }
})

export default store
