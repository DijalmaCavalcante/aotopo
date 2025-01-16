import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext' // Garante suporte a recursos modernos
  },
  server: {
    port: 3000,
  },
});
