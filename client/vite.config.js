import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 5175,
    cors: true
  },
  build: {
    outDir: '../server/public/assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'src/js/app.js'),
      },
      output: {
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'css/[name].[hash].[ext]'
      }
    }
  }
})