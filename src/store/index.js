import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    city: '',
    Cityid: '',
    HouseCode: ''
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setCity(state, payload) {
      state.city = payload
    },
    setCityId(state, payload) {
      state.Cityid = payload
    },
    setCityHouseCode(state, payload) {
      state.HouseCode = payload
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
