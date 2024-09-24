// Vite configuration file
const { defineConfig } = require('vite')

export default defineConfig({
  base: '/admin',
  server: {
    port: 5171
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      input: '/src/index.js'
    }
  }
})
