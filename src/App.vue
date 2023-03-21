<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Gnb from './components/Gnb.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <metainfo/>
  <Gnb />
  <RouterView />
  <Footer />
</template>


<style lang="scss">
#app {
  overflow: auto;
  max-width: 600px;
  margin: 0 auto;
  transform: translateZ(0);
}
</style>