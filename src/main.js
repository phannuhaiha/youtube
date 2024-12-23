import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '@fontsource/roboto'; 
import 'boxicons/css/boxicons.min.css';


const app = createApp(App)

app.use(router)

app.mount('#app')
