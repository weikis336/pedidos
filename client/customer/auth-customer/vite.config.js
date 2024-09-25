const { defineConfig } = require('vite')

export default defineConfig({
  base: '/cliente/login',
  server: {
    port: 5176
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
