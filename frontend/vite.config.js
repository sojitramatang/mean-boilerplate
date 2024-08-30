const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const path = require("path");
const config = require('../config');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../dist/frontend",
  },
  server: {
    host: config.frontend.host,
    port: config.frontend.port,
  },
})