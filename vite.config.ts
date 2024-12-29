import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/v3': {
        target: 'https://habitica.com',
        changeOrigin: true,
        secure: false
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // Configure static asset handling
  publicDir: 'public',
  base: '/'
});