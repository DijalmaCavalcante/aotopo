import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    }
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
