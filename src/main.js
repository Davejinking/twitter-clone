import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// router를 use해준다
createApp(App).use(router).mount('#app')
