// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTA SEO: Sustituir 'https://buonappetito-andratx.com' por el dominio definitivo adquirido
export default defineConfig({
  site: process.env.SITE_URL || 'https://buonappetito-andratx.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
