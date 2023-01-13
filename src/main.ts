import { createApp } from 'vue'
import App from './App.vue'
import vxw from './components/vxw/vxw'

const app = createApp(App)
app.use(vxw)
app.mount('#app')