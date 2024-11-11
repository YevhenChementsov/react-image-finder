import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/react-image-finder/' : '/',
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      icons: resolve(__dirname, 'src/icons'),
      services: resolve(__dirname, 'src/services'),
      helpers: resolve(__dirname, 'src/helpers'),
    },
  },
});
