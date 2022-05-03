<template>
    <tr class="border">
        <td>
            <img class="w-12" :src="data.imageUrl" alt="">
        </td>
        <td>{{ data.title }}</td>
        <td>{{ data.price }}</td>
        <td>
        <button class="border py-2 px-4 rounded text-indigo-600" @click="removeFromCart">Remove</button>
        </td>
    </tr>
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

        const removeFromCart = () => {
            store.dispatch('cart/removeFromCart', props.data.id)
        }

        return { ...toRefs(props), removeFromCart }
    },
})
</script>
