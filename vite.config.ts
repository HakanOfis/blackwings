import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served from the root of the custom domain (blackwings.be), so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
