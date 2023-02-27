import icon from './lib/icon.vue'
import { App } from 'vue'

icon.install = (app: App) => {
 app.component(icon.name, icon)
}

export default icon