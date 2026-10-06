import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages deploys to the root of riyageorgek.github.io
  // so base stays as '/'
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
