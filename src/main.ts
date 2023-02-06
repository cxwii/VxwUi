import { createApp } from 'vue'
import App from './App.vue'
import vxwui from './vxw'
import './theme-chalk/index.scss'

const app = createApp(App)
app.use(vxwui)
app.mount('#app')