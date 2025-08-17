import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'import.meta.env.VITE_API_KEY': JSON.stringify('AIzaSyD1YmIvK8utxmHgewPyPygQceFfgf5E738')
  }
});
