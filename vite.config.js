import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Três páginas: o painel inicial (index.html) e as duas apresentações.
// Tudo é empacotado localmente (reveal.js, fontes, imagens): nenhuma
// requisição externa é feita durante a apresentação.
export default defineConfig({
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    open: '/',
  },
  preview: {
    port: 4173,
    strictPort: true,
    open: '/',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    // reveal.js + highlight.js somam ~1 MB; tudo é servido localmente, sem impacto.
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        painel: resolve(import.meta.dirname, 'index.html'),
        'dia-1-palestra': resolve(import.meta.dirname, 'apresentacoes/dia-1-palestra/index.html'),
        'dia-2-workshop': resolve(import.meta.dirname, 'apresentacoes/dia-2-workshop/index.html'),
      },
    },
  },
});
