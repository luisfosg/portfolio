import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";


export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['react-dom/client'],
    },
  },
  integrations: [
    react(),
    sentry({
      sourceMapsUploadOptions: {
        telemetry: false
      }
    }),
    spotlightjs(),
  ]
});
