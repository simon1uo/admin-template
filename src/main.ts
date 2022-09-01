import { createApp } from 'vue'
import App from './App.vue'

// styles
import './style.css'
import 'uno.css'
import '@/styles/index.scss'

import { setupRouter } from '@/router'

const app = createApp(App)

setupRouter(app)

app.mount('#app')
