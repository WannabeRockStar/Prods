<template>
  <div class="home">
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Product 
        v-for="product in getProducts" 
        :key="product.id" 
        :data="product" />
    </ul>
    <DetailsModal />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'
import Product from '@/components/Product.vue'; // @ is an alias to /src
import DetailsModal from '@/components/DetailsModal.vue'; 

export default defineComponent({
  name: 'Home',
  components: {
    Product,
    DetailsModal
  },

  setup() {
    const store = useStore()

    const getProducts = computed(() => store.state.product.products)

    store.dispatch('product/fetchProducts')

    return { getProducts }
  }
});
</script>
