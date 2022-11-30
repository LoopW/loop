import Vue from 'vue'
import Vuex from 'vuex'
import tagViews from './modules/tagViews'
import user from './modules/user'
import permission from './modules/permission'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    num:100,
    sum:0,
    str:'abc',
  },
  mutations: {
    viewMutations(states){
      console.log('mutation==========')
      console.log(states)
    }
  },
  actions: {
    viewActions(played,b){
      console.log('action============')
      console.log(played)
      console.log(b)
    }
  },
  getters: {

  },
  modules:{
    tagViews,
    user,
    permission
  }
})
