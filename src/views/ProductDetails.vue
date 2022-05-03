<template>
    <div class="flex flex-col md:flex-row gap-4" v-if="getProduct">
        <div class="w-full md:w-1/2 lg:w-1/3">
            <img :src="getProduct.imageUrl" alt="">
        </div>
        <div class="w-full md:w-1/2">
            <h2 class="font-bold text-center md:text-left text-lg">{{getProduct.title}}</h2>
            <button class="border w-full md:w-48 border-indigo-600 text-indigo-600 py-2 px-6 transition-all hover:bg-indigo-600 hover:text-white"
            @click="addToCart">Add to cart</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Product from './../types/Product'

export default defineComponent({
    setup() {
        const route = useRoute()
        const store = useStore()

        
        const getProduct = computed(() => store.state.product.products.find((product: Product) => product.id === +route.params.id))
        store.dispatch('product/fetchProducts')


        const addToCart = () => {
            store.dispatch('cart/addToCart', getProduct.value)
        }

        return { getProduct, addToCart }
    }
})

</script>