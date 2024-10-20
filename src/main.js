import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Toast)
app.mount('#app')
