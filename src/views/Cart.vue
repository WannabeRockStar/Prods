<template>
  <div class="about">
    <table class="table-auto w-full">
      <thead>
        <tr class="border">
          <th class="text-left p-2">Image</th>
          <th class="text-left p-2">Title</th>
          <th class="text-left p-2">Price</th>
          <th class="text-left p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <CartTableItem 
          v-for="cartItem in getCart" 
          :key="cartItem.id" 
          :data="cartItem" />
        
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import CartTableItem from './../components/CartTableItem.vue'

export default defineComponent({

  components: { CartTableItem },
  
  setup() {
    const store = useStore()
        
    const getCart = computed(() => store.state.cart.cart)
    
    return { getCart }
  },
})
</script>
