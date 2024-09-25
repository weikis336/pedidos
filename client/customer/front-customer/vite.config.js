const { defineConfig } = require('vite')

export default defineConfig({
  base: '/cliente',
  server: {
    port: 5177
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
