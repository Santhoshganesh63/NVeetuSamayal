import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths work on both GitHub Pages project URLs and custom domains.
export default defineConfig({
  plugins: [react()],
  base: './',
});
