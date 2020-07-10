import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {score : []
  },
  mutations: {decisionJanken: (state,payload) => state.score.push(payload.amount)
  },
  actions: {
  },
  modules: {
  },
  getters:{score: state => { return state.score } }
})