import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

})
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['pdfjs-dist'],
//   },
//   build: {
//     rollupOptions: {
//       external: ['pdfjs-dist/build/pdf.worker.min.js'],
//     },
//   },
// });