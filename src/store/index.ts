import { createStore } from 'vuex'
import * as header from './modules/header'
import * as user from './modules/user'
import * as product from './modules/product'
import * as cart from './modules/cart'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header,
    user,
    product,
    cart
  }
})
