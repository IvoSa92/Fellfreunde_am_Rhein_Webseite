import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['cee68481756f.ngrok-free.app'],
    },
  },
});
