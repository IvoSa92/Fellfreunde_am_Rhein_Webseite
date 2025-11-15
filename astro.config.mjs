import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: WICHTIG - Ersetzen Sie dies mit Ihrer echten Domain vor dem Launch!
  site: 'https://fellfreunde-am-rhein.de',
  
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
