import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    open: true,
    port: 9527
  },
  build: {
    outDir: "VxwUi",
    lib: {
      // 打包入口路径
			entry: path.resolve(__dirname, "./src/vxw.ts"),
			name: "VxwUi",
			fileName: "VxwUi",
		},
    rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue"
				},
			},
		}
  }
})
