import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        loadpages: path.resolve(__dirname, 'loadpages.js') // Garante que loadpages.js será incluído
      },
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
        { src: 'src/banner/banner.html', dest: '' }, 
        { src: 'src/footer/footer.html', dest: '' },
        { src: 'src/members/members.html', dest: '' },
        { src: 'src/infomusic/infomusic.html', dest: '' },
        { src: 'src/pictures/pictures.html', dest: '' }
      ]
    })
    
  ]
});