import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employerMax: null,
    employeeMin: null,
    negotiationResult: ''
  },
  mutations: {
    setEmployeeInput (state, input) {
      state.employeeMin = input
    },
    setEmployerInput (state, input) {
      state.employerMax = input
    },
    setNegotiationResult (state) {
      if (state.employeeMin <= state.employerMax) {
        state.negotiationResult = 'Success'
      } else {
        state.negotiationResult = 'Failure'
      }
    }
  },
  actions: {
    evaluateInputs ({ commit, state }) {
      if (state.employeeMin && state.employerMax) {
        commit('setNegotiationResult')
      } else {
        return false
      }
    }
  }
})
