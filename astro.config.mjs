// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
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
    })
  ]
});