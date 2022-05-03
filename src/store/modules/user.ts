import axios from 'axios'
import User from './../../types'

export const namespaced = true

export const state = {
    user: {}
}

export const mutations = {
    REGISTER_USER(state: any, payload: User): void {
        state.user = payload
    },

    LOGIN_USER(state: any, payload: User): void {
        state.user = payload
    },

    LOGOUT_USER(state: any): void {
        state.user = {}
    }
}

export const actions = {
    async registerUser(context: any, payload: User) {
        const data = await axios.post('http://localhost:3000/users', payload)
        context.commit('REGISTER_USER', data.data)
    },

    async loginUser(context: any, payload: User) {
        const response = await axios.get('http://localhost:3000/users')
        
        const filter = response.data.find((item: User) => payload.email === item.email)
        
        if(filter) {
            context.commit('REGISTER_USER', filter)
            if(!localStorage.getItem('user')) {
                localStorage.setItem('user', JSON.stringify(filter))
            }
        }
    },

    logoutUser(context: any): void {
        if(localStorage.getItem('user')) {
            localStorage.removeItem('user')
            context.commit('LOGOUT_USER')
        }
    }
}