import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';
import aws from "astro-sst/lambda";
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://codeart.org/',
  srcDir: 'src',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai'
    }
  },
  output: "server",
  adapter: aws(),
  integrations: [react(), tailwind({
    configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url))
  }), sitemap(), robotsTxt(), astroImageTools,
    mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'monokai' }})],
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },

});
