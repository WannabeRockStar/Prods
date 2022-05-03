<template>
    <div class="bg-indigo-600 h-12 flex items-center px-4 md:px-12 flex justify-between fixed top-0 left-0 w-full z-10">
        <h2 class="text-xl text-white">
            <router-link to="/">Prodify</router-link>
        </h2>
        <div class="hidden sm:flex">
            <router-link class="text-white mr-6" to="/">Home</router-link>
            <router-link class="text-white mr-6" to="/cart">Cart</router-link>
            <button class="mr-6 outline-none" @click="toggleCart">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="#fff" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                </svg>
            </button>
            <div v-if="!Object.keys(getUser).length">
                <button @click="toggleRegisterModal" class="bg-white px-2 text-sm rounded mr-3 outline-none">Register</button>
                <button @click="toggleLoginModal" class="bg-red-500 text-white px-2 text-sm rounded outline-none">Log in</button>
            </div>
            <div class="flex" v-else>
                <span class="mr-6">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="#fff" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                    </svg>
                </span>
                <button @click="logoutUser" class="bg-red-500 text-white px-2 text-sm rounded">Log out</button>
            </div>
        </div>
        <div class="relative sm:hidden">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="openNavbar = !openNavbar">
                <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
            <ul :class="{ 'd-block': openNavbar }" class="absolute top-8 !shadow-lg w-28 right-0 bg-white p-4 hidden">
                <li>Home</li>
                <li>User</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
    setup() {
        const store = useStore()
        const openNavbar = ref(false)

        const getUser = computed(() => store.state.user.user)

        const toggleRegisterModal = () => {
            store.dispatch('header/toggleRegisterModal', true)
        }

        const toggleLoginModal = () => {
            store.dispatch('header/toggleLoginModal', true)
        }

        const toggleCart = () => {
            store.dispatch('header/toggleCartModal', true)
        }

         const logoutUser = () => {
            store.dispatch('user/logoutUser')
        }

        return { toggleRegisterModal, toggleLoginModal, logoutUser, toggleCart, getUser, openNavbar }
    },
})
</script>
