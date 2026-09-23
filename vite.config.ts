import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: false,
    historyApiFallback: true,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('react-helmet')) {
              return 'vendor-helmet';
            }
            if (id.includes('react')) {
              return 'vendor-react-core';
            }
            return 'vendor-utils';
          }
          if (id.includes('src/pages/')) {
            const pageFile = id.split('src/pages/')[1].replace(/\.tsx?$/, '').toLowerCase();
            return `pg-${pageFile}`;
          }
          if (id.includes('src/sections/')) {
            const secFile = id.split('src/sections/')[1].replace(/\.tsx?$/, '').toLowerCase();
            return `sec-${secFile}`;
          }
          if (id.includes('src/components/')) {
            return 'site-components';
          }
          if (id.includes('src/data/')) {
            return 'site-data';
          }
        },
      },
    },
  },
});

