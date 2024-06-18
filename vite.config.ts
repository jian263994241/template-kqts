import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 1024,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          //antd: ['antd', 'antd-more'],
          react: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  envPrefix: 'REACT_',
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true
      }
    }
  }
});
