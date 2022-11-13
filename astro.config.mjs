import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), vue()],
  site: "https://porkyproductions.github.io",
  base: "/PorkysPotOfPollution/"
});