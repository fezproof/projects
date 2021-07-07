import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          filename: 'vis/stats.html',
          open: true,
          template: 'sunburst',
        }),
      ],
    },
  },
  server: {
    proxy: {
      '/graphql': 'http://localhost:3100/dev',
    },
  },
});
