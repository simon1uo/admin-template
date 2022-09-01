import { createApp } from 'vue'
import App from './App.vue'

// styles
import './style.css'
import 'uno.css'
import '@/styles/index.scss'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'

const app = createApp(App)

setupStore(app)
setupRouter(app)

app.mount('#app')
