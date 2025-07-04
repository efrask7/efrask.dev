// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  integrations: [
    tailwind(), 
    react(), 
    icon({
      include: {
        lucide: ["*"], // (Default) Loads entire Material Design Icon set
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-UY',
          en: 'en-US'
        }
      },
      customPages: [
        'https://efrask.dev/projects',
      ]
    })
  ],
  site: 'https://efrask.dev'
});