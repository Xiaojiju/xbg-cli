import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutation'
import state from './state'
import getters from './getters'
import actions from './action'
Vue.use(Vuex)

const store = new Vuex.Store({
    mutations,
    state,
    getters,
    actions
})

export default store