<template>
    <div :class="{'opacity-100': getOpen, 'show-visible': getOpen}" 
        @click.self="toggleElement"
        class="opacity-0 invisible fixed top-0 right-0 h-full w-full bg-gray-600 bg-opacity-25 transition-all duration-300 z-10">
        <div :class="{'translate-show': getOpen}" 
            class="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow p-4 transform translate-x-full transition-all duration-300">
            <span>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="toggleElement">
                    <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </span>
            <ul v-if="getCart.length" class="h-full overflow-y-auto pb-12">
                <cartModalItem v-for="cartItem in getCart" :key="cartItem.id" :data="cartItem" />
            </ul>
            <div v-else class="h-full flex justify-center items-center">
                <h2 class="font-bold text-lg">Cart is empty</h2>
            </div>

            <div class="fixed bottom-0 left-0 w-full">
                <button 
                    class="w-full border h-12 text-indigo-600 bg-white"
                    @click="openCart">
                    Full Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, toRefs, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import cartModalItem from './CartModalItem.vue'

export default defineComponent({
    components: { cartModalItem },
    setup() {
        const store = useStore()
        const router = useRouter()
        // Component state
        const state = reactive({
            
        })
        // Computed properties
        const getOpen = computed(() => store.state.header.cartModalShow)
        const getCart = computed(() => store.state.cart.cart)
        // Methods
        const toggleElement = () => {
            store.dispatch('header/toggleCartModal', false)
        }

        const openCart = () => {
            router.push('/cart')
            toggleElement()
        }

        return { ...toRefs(state), toggleElement, getOpen, getCart, openCart }
    }
})

</script>