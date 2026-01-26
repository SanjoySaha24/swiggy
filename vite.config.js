import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
   server: {
    proxy: {
      "/api": {
        target: "https://www.swiggy.com",   // Swiggy API
        changeOrigin: true,                // acts like a backend
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "") // remove /api prefix
      }
    }
  }
})
