import input from './lib/input.vue'
import { App } from 'vue'

input.install = (app: App) => {
 app.component(input.name, input)
}

export default input