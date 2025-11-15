import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Production Domain - Custom Domain für Cloudflare Pages
  site: 'https://fellfreunde.blackforest-webcraft.de',
  
  integrations: [
    sitemap({
      // Nur Seiten mit diesen Pfaden in die Sitemap aufnehmen
      filter: (page) => !page.includes('404'),
    }),
  ],
  
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['b08b7783ca27.ngrok-free.app'],
    },
  },
  
  build: {
    inlineStylesheets: 'auto', // Optimiert CSS-Inlining für bessere Performance
  },
  
  compressHTML: true, // Komprimiert HTML im Build
});
