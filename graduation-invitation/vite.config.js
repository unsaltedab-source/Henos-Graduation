import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for GitHub Pages
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
