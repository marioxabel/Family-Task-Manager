import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/register': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/quotes': {  
        target: 'https://zenquotes.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/quotes/, ''),
        secure: false
      }
    }
  }
})
