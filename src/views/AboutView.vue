<script setup>
import { useMeta } from 'vue-meta' 

useMeta({
  title: 'about',
  meta: [
    {vmid: 'description', name: 'description', content: 'meta정보의 description'},
    {vmid: 'keywords', name: 'keywords', content: 'keyword1, keyword2'},
    {vmid: 'og:type', name: 'og:type', content: 'article'},
    {vmid: 'og:title', name: 'og:title', content: 'og title info'},
    {vmid: 'og:description', name: 'og:description', content: 'og description'},
    {vmid: 'og:url', name: 'og:url', content: 'og url'},
    {vmid: 'og:image', name: 'og:image', content: 'og:image 경로'}
  ]
})

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
