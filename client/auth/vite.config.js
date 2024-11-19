const { defineConfig } = require('vite')

export default defineConfig({
  base: '/auth',
  server: {
    port: 5178
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
