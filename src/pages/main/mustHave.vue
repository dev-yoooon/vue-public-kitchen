<script setup>
import { reactive } from 'vue';
const props = defineProps({
    url: {
        type: String
    },
    imgSrc: {
        type: String
    },
    title: {
        type: String,
        required: true,
    },
    info: {
        type: Array
    },
    price: {
        type: String
    },
})
</script>

<template>
<RouterLink :to="{path: props.url}">
    <figure class="list-img">
        <img :src=props.imgSrc alt="" />
    </figure>
    <div class="list-content">
        <strong class="t-title2">{{ props.title }}</strong>
        <div class="text-info" v-if="props.info">
            <span v-for="(text, i) in props.info" :key="i">{{ text }}</span>
        </div>
        <span class="price">
            <em>₩</em>{{ props.price }}
        </span>
    </div>
</RouterLink>
</template>