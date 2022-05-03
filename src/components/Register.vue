<template>
    <div :class="{'opacity-100': getOpen, 'show-visible': getOpen}" 
        @click.self="toggleElement"
        class="opacity-0 invisible fixed top-0 right-0 h-full w-full bg-gray-600 bg-opacity-25 transition-all duration-300 z-10">
        <div :class="{'translate-show': getOpen}" 
            class="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow p-4 transform translate-x-full transition-all duration-300" >
            <span>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="toggleElement">
                    <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </span>
            <form @submit="register">
                <div class="mb-4">
                    <label for="">User</label>
                    <input type="text" class="input-style" v-model="username">
                </div>
                <div class="mb-4">
                    <label for="">Email</label>
                    <input type="text" class="input-style" v-model="email">
                </div>
                <div class="mb-4">
                    <label for="">Password</label>
                    <input type="password" class="input-style" v-model="password">
                </div>
                <div>
                    <button>Sign up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent, toRefs, reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const store = useStore()
        const state = reactive({
            isOpen: false,
            email: '',
            password: '',
            username: ''
        })

        const getOpen = computed(() => store.state.header.registerModalShow)

        const toggleElement = () => {
            store.dispatch('header/toggleRegisterModal', false)
        }

        const register = (e: Event) => {
            e.preventDefault()

            const payload = {
                email: state.email,
                username: state.username,
                password: state.password
            }

            store.dispatch('user/registerUser', payload)
            state.email = ''
            state.username = ''
            state.password = ''
            toggleElement()

            console.log(state.email, state.password, state.username)
        }

        return { ...toRefs(state), toggleElement, getOpen, register }
    }
})

</script>