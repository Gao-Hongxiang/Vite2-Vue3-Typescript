import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"
import { resolve } from "path"
export default defineConfig({
  plugins: [vue(), viteMockServe()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/theme.scss";'
      },
      less: {
        additionalData: '@import "@/styles/theme.less";'
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
})
