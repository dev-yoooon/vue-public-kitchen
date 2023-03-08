<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    class: {
        type: String,
    },
    placeholder: {
        type: String,
        default: 'placeholder'
    },
    title: {
        type: String,
    }
})

</script>

<template>
<div class="inp-wrap">
    <input :type="props.type" :class="props.class" name="" value="" :placeholder="props.placeholder" :title="props.title">
    <!-- [D]: focus될 때, value가 빈값이 아닐 때 .hidden 삭제 -->
    <button class="inp-search_del" title="입력내용 지움"></button>
</div>
</template>
