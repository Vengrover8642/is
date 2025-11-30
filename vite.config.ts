import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' 

export default defineConfig({ 
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'is',
      fileName: (format) => `is.${format}.js` 
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { 
          vue: 'Vue'
        }
      }
    }
  }
})