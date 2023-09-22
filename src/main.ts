import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { inject } from '@vercel/analytics'

import App from './App.vue'
import router from './router'

import '@/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

console.log(import.meta.env)
inject({
  mode: import.meta.env.DEV ? 'development' : 'production'
})
