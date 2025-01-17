import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Diretorio de saída
    rollupOptions: {
      input: 'index.html',  // Arquivo de entrada principal
    }
  }
});
