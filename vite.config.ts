import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin()  // ✨ SLAY MAGIC HERE ✨
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Asboy2035UI',
      fileName: (format) => `asboy2035-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: false  // still leave this true to keep control
  }
})