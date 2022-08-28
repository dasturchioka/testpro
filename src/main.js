import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { createHead } from "@vueuse/head"
import "./index.css"

const head = createHead()
createApp(App).use(store).use(router).use(head).mount('#app')
