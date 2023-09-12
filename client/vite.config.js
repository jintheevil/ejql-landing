import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  server: {
    port: 8000,
    proxy: {
      '/api' : {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', ''),
      }
    }
  }
})
