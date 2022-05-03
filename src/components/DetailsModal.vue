<template>
    <div class="opacity-0 invisible fixed top-0 right-0 h-full w-full bg-gray-600 bg-opacity-25 transition-all duration-300 z-10 flex justify-center items-center" 
        :class="{'opacity-100': getOpen, 'show-visible': getOpen}"
        @click.self="toggleElement">
        <div class="bg-white w-1/4 p-8">
            <img :src="getProduct.imageUrl" alt="">
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    
    setup() {
        const store = useStore()

        const getProduct = computed(() => store.state.product.productDetails)
        const getOpen = computed(() => store.state.product.productDetailsShow)

        const toggleElement = () => {
            store.dispatch('product/toggleProductDetails', false)
        }

        return { getProduct, getOpen, toggleElement }

    },
})
</script>
