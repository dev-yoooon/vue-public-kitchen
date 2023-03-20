<script setup>
import { ref } from 'vue';

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
    },
    value: {
        type: String
    }
})
let inputValue;
const resetValue = (val) => {
    inputValue.value = '';
}

</script>

<template>
<div class="inp-wrap">
    <input :type="props.type" :class="props.class" name="" :placeholder="props.placeholder" :title="props.title"
        ref="inputValue">
    <!-- [D]: focus될 때, value가 빈값이 아닐 때 .hidden 삭제 -->
    <button type="button" class="inp-search_del" title="입력내용 지움"  @click="resetValue"></button>
</div>
</template>
