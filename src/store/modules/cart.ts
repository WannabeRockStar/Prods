import { Commit } from "vuex";

interface Product {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;
    picked: number;
}

interface State {
    cart: Product[];
}
 
export const namespaced = true

export const state = {
    cart: [] as Product[]
}

export const mutations = {
    FETCH_CART(state: State, payload: Product[]): void {
        state.cart = payload
    },

    REMOVE_FROM_CART(state: State, payload: Product[]): void {
        state.cart = payload
    },

    ADD_TO_CART(state: State, payload: Product[]): void {
        state.cart = payload
    }
}

export const actions = {
    fetchCart({ commit }: { commit: Commit }, payload: string): void {
        if(localStorage.getItem('cart')) {
            const data = JSON.parse(payload)
            commit('FETCH_CART', data)
        }
    },

    removeFromCart({ commit }: {commit: Commit}, payload: number): void {
        if(localStorage.getItem('cart')) {
            const data = localStorage.getItem('cart') as string
            const cartArray = JSON.parse(data)
            const filterArray = cartArray.filter((item: Product) => item.id !== payload)
            const cartString: string = JSON.stringify(filterArray)
            localStorage.setItem('cart', cartString)
            commit('REMOVE_FROM_CART', filterArray)
        }
    },

    addToCart({ commit }: { commit: Commit }, payload: Product): void {
        if(!localStorage.getItem('cart')) {
            payload.picked = 1
            const cartArray: Product[] = []
            cartArray.push(payload)
            const data = JSON.stringify(cartArray)
            localStorage.setItem('cart', data)
            commit('ADD_TO_CART', cartArray)
        } else {
            const data = localStorage.getItem('cart') as string
            const cartArray = JSON.parse(data)
            if(cartArray.filter((product: Product) => product.id === payload.id).length) {
                cartArray.forEach((item: Product) => {
                    if(item.id === payload.id && item.picked < payload.quantity) {
                        item.picked++
                    }
                })
                const data = JSON.stringify(cartArray)
                localStorage.setItem('cart', data)
                commit('ADD_TO_CART', cartArray)
            } else {
                payload.picked = 1
                cartArray.push(payload)
                const data = JSON.stringify(cartArray)
                localStorage.setItem('cart', data)
                commit('ADD_TO_CART', cartArray)
            }
        }
    }
}