import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@uiw') || id.includes('@codemirror')) {
            return 'codemirror';
          }
          if (id.includes('parse5')) {
            return 'parse5';
          }
        }
      }
    }
  }
})
