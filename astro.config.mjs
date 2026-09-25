// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Base styles are imported from src/styles/global.css in Layout.astro.
  integrations: [tailwind({ applyBaseStyles: false }), react(), sitemap()],
  site: 'https://example.com'
});
