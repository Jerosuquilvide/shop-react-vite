import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shop-react-vite/",
  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets"
  // },
  plugins: [react()],
})
