# VxwUi
```
个人学习用的ui组件库,慎重使用
```

## npm
```
pnpm install vxwui
```

## 安装依赖
```
pnpm install
```

## 运行dev环境
```
pnpm run dev
```

## 打包
### (目前打包后如果要更新上传npm要自己配置package.json和d.ts声明文件)
```
pnpm run build
```

## demo
```
// main.js
// 全局导入
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入组件库
import vxwui from 'vxwui'
// 导入组件库样式
import "../node_modules/vxwui/style.css"

const app = createApp(App)
app.use(vxwui)
app.mount('#app')
```

```
// main.js
// 按需导入
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入组件库
import vxwui from 'vxwui'
// 导入组件库样式
import "../node_modules/vxwui/style.css"

const app = createApp(App)
app.use(button)
app.mount('#app')
```

## 组件库文档
### 按钮
```
<vxw-button></vxw-button>

属性:
// 按钮类型
type: 'primary' | 'success' | 'danger'
// 按钮内容
value: String
```
### 输入框
```
<vxw-input></vxw-input>
```