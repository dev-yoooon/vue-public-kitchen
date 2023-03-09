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


