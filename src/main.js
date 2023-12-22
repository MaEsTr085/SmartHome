import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')


import router from './components/router'

createApp(App).use(router).mount('#app')