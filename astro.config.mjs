import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['b08b7783ca27.ngrok-free.app'],
    },
  },
});
