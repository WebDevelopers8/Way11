import '@/app/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app/App.vue'
//@ts-ignore
import VueSplide from '@splidejs/vue-splide';
import router from '@/app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use( VueSplide )

app.mount('#app')
