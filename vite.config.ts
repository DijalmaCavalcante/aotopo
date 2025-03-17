import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      }
    },
    modulePreload: { polyfill: true }
  },

  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/**/*', dest: 'src' }  // Copia todos os arquivos dentro de src para dist/src
      ]
    })
    
  ]
});
