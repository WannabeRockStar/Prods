<template>
  <div id="nav">
    <Header />
    <Register />
    <Login />
    <CartModal />
  </div>
  <div class="px-4 md:px-12 mt-24">
    <router-view/>
  </div>
</template>

<script lang="ts">

import Header from './components/Header.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import CartModal from './components/CartModal.vue'
import { useStore } from 'vuex'

export default {
  components: { Header, Register, Login, CartModal },
  setup() {
    const store = useStore()
    // const count = ref(0)

    if(localStorage.getItem('cart')) {
      store.dispatch('cart/fetchCart', localStorage.getItem('cart'))
    }

    if(localStorage.getItem('user')) {
      const user = localStorage.getItem('user') as string
      const data = JSON.parse(user)
      store.commit('user/LOGIN_USER', data)
    }
    
    document.addEventListener("keydown", (e) => {
      console.log(e)
      if (e.key == 'Escape') {
          store.dispatch('header/toggleCartModal', false)
          store.dispatch('header/toggleLoginModal', false)
          store.dispatch('header/toggleRegisterModal', false)
      }
    });
    // expose to template and other options API hooks
    return { }
  },
}
</script>

<style>

</style>
