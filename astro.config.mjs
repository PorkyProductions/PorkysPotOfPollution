import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://porkyproductions.github.io',
  integrations: [mdx(), sitemap(), tailwind(), react(), svelte(), vue()],
  base: '/PorkysPotOfPollution'
});