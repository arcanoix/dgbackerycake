// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.dgbakerycake.com',
    integrations: [
        mdx(), 
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
    vite: {
        server: {
            watch: { usePolling: true }
        },
    },
    image: {
        service: { entrypoint: 'astro/assets/services/sharp' }
    }
});
