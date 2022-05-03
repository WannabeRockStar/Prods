<template>
    <li class="mb-4 flex gap-x-4">
        <div class="w-16 shadow w-1/4">
            <img :src="data.imageUrl" alt="">
        </div>
        <div class="flex justify-between w-3/4">
            <div>
                <h3>{{ data.title }}</h3>
            </div>
            <div class="cursor-pointer" @click="removeFromCart">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="toggleElement">
                    <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </div>
        </div>
    </li>
</template>

<script>
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

        const removeFromCart = () => {
            store.dispatch('cart/removeFromCart', props.data.id)
        }
        return { ...toRefs(props), removeFromCart }
    },
})
</script>
