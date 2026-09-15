import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/godbound_caldia_rpg/', // Essencial para o GitHub Pages achar os arquivos
})