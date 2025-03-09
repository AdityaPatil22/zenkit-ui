import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ZenUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui-components.${format}.js`,
    },
    rollupOptions: {
      external: ['lit'],
    },
  },
});
