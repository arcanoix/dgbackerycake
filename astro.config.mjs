// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            watch: { usePolling: true }
        },
    },
    image: {
        service: { entrypoint: 'astro/assets/services/sharp' }
    }
});
