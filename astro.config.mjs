import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://codeart.org/',
  srcDir: 'src',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always',
  output: 'server',
  // Local SSR build/dev adapter. Production deploys go through `sst deploy`,
  // where the SST Ion Astro component owns the hosting adapter.
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
  },
});
