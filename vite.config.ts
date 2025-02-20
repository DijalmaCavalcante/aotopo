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
        entryFileNames: '[name].js',  // Remove hash dos arquivos JS
        chunkFileNames: '[name].js',  // Remove hash dos chunks
        assetFileNames: '[name][extname]' // Remove hash dos assets (CSS, imagens, etc.)
      }
    },
    modulePreload: { polyfill: true }
  },

  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '_headers',
          dest: ''
        }
      ]
    })
  ]
});
