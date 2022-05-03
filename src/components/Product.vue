<template>
  <li class="relative group">
    <router-link :to="{name: 'Details', params: {id: data.id}}">
      <div>
        <img :src="data.imageUrl" alt="">
      </div>
      <h1 class="absolute bottom-4 right-4 text-gray-600 text-lg font-bold">{{ data.title }}</h1>
      <div class="w-full h-full bg-red-200 absolute top-0 left-0 bg-opacity-50 flex justify-center items-center transition-all duration-500 opacity-0 group-hover:opacity-100">
        <button class="mr-4" title="Show details" @click="fetchProductDetails">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#fff" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5A1.5,1.5 0 0,1 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5Z" />
          </svg>
        </button>
        <button @click="addToCart">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#fff" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
          </svg>
        </button>
      </div>
    </router-link>
    
  </li>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    
    setup(props) {
      const store = useStore()

      const fetchProductDetails = (e: Event) => {
        e.preventDefault()
        store.dispatch('product/fetchProductDetails', props.data['id'])
        store.dispatch('product/toggleProductDetails', true)
      }

      const addToCart = (e: Event) => {
        e.preventDefault()
        store.dispatch('cart/addToCart', props.data)
      }

      return { ...toRefs(props), fetchProductDetails, addToCart }
    }
  })
</script>

