const { defineConfig } = require('vite')

export default defineConfig({
  base: '/admin/login',
  server: {
    port: 5170
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
