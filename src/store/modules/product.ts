import axios from 'axios'
import { Commit } from 'vuex'

interface Product {
    id: number;
    imageUrl: string;
    title: string;
    quantity: number;
    price: number;
}

interface State {
    products: Product[];
    productDetails: Product;
    productDetailsShow: boolean
}

export const namespaced = true

export const state = {
    products: [],
    productDetails: {},
    productDetailsShow: false
}

export const mutations = {
    FETCH_PRODUCTS(state: State, payload: Product[]): void {
        state.products = payload
    },

    FETCH_PRODUCT_DETAILS(state: State, payload: Product):void {
        state.productDetails = payload
    },

    TOGGLE_PRODUCT_DETAILS(state: State, payload: boolean): void {
        state.productDetailsShow = payload
    }
}

export const actions = {
    async fetchProducts({ commit }: { commit: Commit }): Promise<void> {
        const response = await axios.get('http://localhost:3000/products')
        commit('FETCH_PRODUCTS', response.data)
    },

    fetchProductDetails({ commit, state }: {commit: Commit, state: State}, payload: number): void {
        if(state.products.length) {
            const product = state.products.find((item: Product) => item.id === payload)
            commit('FETCH_PRODUCT_DETAILS', product)
        }
    },

    toggleProductDetails({ commit }: { commit: Commit }, payload: boolean): void {
        commit('TOGGLE_PRODUCT_DETAILS', payload)
    }
}