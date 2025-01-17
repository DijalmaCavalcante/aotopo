import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Define base path relativo
  build: {
    outDir: 'dist',  // Diretorio de saída
    rollupOptions: {
      input: 'index.html',  // Arquivo de entrada principal
    }
  }
});
