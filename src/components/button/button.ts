import button from './lib/button.vue'
import { App } from 'vue'

// 用于按需注册
// 开发环境按需注册会有ts编译器报错(未解决)
button.install = (app: App) => {
  console.log('123456 :>> ')
 app.component(button.name, button)
}

export default button