import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/godbound_caldia_rpg/', // Essencial ter as barras antes e depois do nome do repo!
})