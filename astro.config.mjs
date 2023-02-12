import { defineConfig } from 'astro/config'
import i18n from "astro-i18n"

import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(), tailwind(), mdx(), image(), react()]
})
