import rss from '@astrojs/rss';

import { AppConfig } from '@/utils/AppConfig';

export async function GET(context: { site?: URL }) {
  return rss({
    // `<title>` field in output xml
    title: AppConfig.title,
    // `<description>` field in output xml
    description: AppConfig.description,
    // base URL for RSS <item> links
    // `context.site` comes from "site" in astro.config.
    site: context.site ?? new URL('https://codeart.org/'),
    // list of `<item>`s in output xml
    // generate items for every mdx file in /src/pages/posts
    items: import.meta.glob('./posts/*.mdx'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
