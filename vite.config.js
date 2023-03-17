import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'public': fileURLToPath(new URL('./public', import.meta.url)),
      'js': fileURLToPath(new URL('./src/assets/js', import.meta.url)),
      'img': fileURLToPath(new URL('./src/assets/img', import.meta.url))
    }
  },
  server: {
    host: true, // 0.0.0.0
    port: 1119,
    open: true,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    }
  }
})
