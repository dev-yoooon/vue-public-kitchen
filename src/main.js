import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'

import './assets/scss/common.scss'

const app = createApp(App)

app
    .use(router)
    .use(createMetaManager())
    .mount('#app')


