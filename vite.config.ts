import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        account: resolve(__dirname,'src/oauth/createAccount/accountCreate.html'),
      },
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
        { src: 'src/**/*', dest: 'src' }
      ]
    })
  ]
})
