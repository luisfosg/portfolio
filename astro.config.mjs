import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";


export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sentry({
      sourceMapsUploadOptions: {
        telemetry: false
      }
    }),
    spotlightjs(),
  ]
});
