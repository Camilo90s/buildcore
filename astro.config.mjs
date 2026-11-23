// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Si Vercel te asigna otra URL o usas un dominio propio, cámbiala aquí y en public/robots.txt.
  site: 'https://buildcore-phi.vercel.app',
  trailingSlash: 'ignore',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // CSS en línea en el <head>: cero peticiones que bloqueen el render.
    inlineStylesheets: 'always',
  },

  compressHTML: true,

  // Inter variable autoalojada (preload + fallback con métricas ajustadas = CLS 0).
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
