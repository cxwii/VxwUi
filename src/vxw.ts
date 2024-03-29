import { App } from "vue";
import "./theme-chalk/index.scss";
import button from "@/components/button/button";
import icon from "@/components/icon/icon";

// 按需导出
export { 
  button,
  icon
}

// 全局导出
const components = [
  button,
  icon
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default { install }