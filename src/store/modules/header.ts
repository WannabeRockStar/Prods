import { Commit } from 'vuex'

export const namespaced = true

export const state: {registerModalShow: boolean, loginModalShow: boolean, cartModalShow: boolean} = {
    registerModalShow: false,
    loginModalShow: false,
    cartModalShow: false
}

export const mutations = {
    TOGGLE_REGISTER_MODAL(state: {registerModalShow: boolean}, payload: boolean): void {
        state.registerModalShow = payload
    },

    TOGGLE_LOGIN_MODAL(state: {loginModalShow: boolean}, payload: boolean): void {
        state.loginModalShow = payload
    },

    TOGGLE_CART_MODAL(state: {cartModalShow: boolean}, payload: boolean): void {
        state.cartModalShow = payload
    }
}

export const actions = {
    toggleRegisterModal({ commit }: { commit: Commit }, payload: boolean): void {
        commit('TOGGLE_REGISTER_MODAL', payload)
    },

    toggleLoginModal({ commit }: { commit: Commit }, payload: boolean): void {
        commit('TOGGLE_LOGIN_MODAL', payload)
    },

    toggleCartModal({ commit }: { commit: Commit }, payload: boolean): void {
        commit('TOGGLE_CART_MODAL', payload)
    }
}