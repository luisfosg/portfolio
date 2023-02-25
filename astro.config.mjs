import { defineConfig } from 'astro/config'
import astroI18next from 'astro-i18next'

import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import react from '@astrojs/react'

/// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), tailwind(), mdx(), image(), react()]
})
