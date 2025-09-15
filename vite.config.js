import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 IMPORTANT for GitHub Project Pages:
  base: '/personal-site/',   // e.g. '/personal-site/'
})
