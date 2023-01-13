import button from './lib/button.vue'
import { App } from 'vue'

button.install = (app: App) => {
 app.component(button.name, button)
}

export default button