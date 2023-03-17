import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import { getImage } from './assets/js/global.js'

import './assets/scss/common.scss'

const app = createApp(App)

app.config.globalProperties = {
    $getImgUrl: getImage,
    $imgUrl: '/src/assets/img',
}
app
    .use(router)
    .use(createMetaManager())
    .mount('#app')