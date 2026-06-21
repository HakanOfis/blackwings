import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// On build we serve from GitHub Pages project path (/blackwings/);
// in dev we serve from root (/).
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/blackwings/' : '/',
  plugins: [react()],
}))
