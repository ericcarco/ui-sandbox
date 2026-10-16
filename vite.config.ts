import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: ['terminal.local'] },
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'ui-sandbox', cssFileName: 'ui-sandbox' },
    rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime', 'motion/react'] },
  },
});
