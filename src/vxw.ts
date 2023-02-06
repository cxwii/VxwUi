import { App } from "vue";
import button from "@/components/button/button";
import input from "@/components/input/input";

// 按需导出
export { 
  button,
  input
}

// 全局导出
const components = [
  button,
  input
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default { install }