import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint'; // No @ symbol

export default defineConfig({
  plugins: [react(), eslint()],
});