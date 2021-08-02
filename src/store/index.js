import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart'
import products from './module/products'
import actions from './actions' //根级别的 action
import mutations from './mutations' //根级别的 mutation

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  modules: {
    cart,
    products
  }
})
