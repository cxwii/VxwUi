import buttonGroup from './lib/button-group.vue'
import { App } from 'vue'

// 用于按需注册
// 开发环境按需注册会有ts编译器报错(未解决)
buttonGroup.install = (app: App) => {
  console.log('123456 :>> ')
 app.component(buttonGroup.name, buttonGroup)
}

export default buttonGroup