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
        { src: 'src/**/*.html', dest: 'src' }  // Copia os arquivos HTML para a pasta dist/src/
      ]
    })
  ]
});
