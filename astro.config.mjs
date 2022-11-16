import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { SITE } from './src/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  server: { host: '0.0.0.0' },
  site: SITE.url,
  output: 'server',
  adapter: cloudflare(),
});
