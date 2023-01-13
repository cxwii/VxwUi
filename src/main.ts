import { createApp } from 'vue'
import App from './App.vue'
import vxwui from './components/vxw/vxw'

const app = createApp(App)
app.use(vxwui)
app.mount('#app')