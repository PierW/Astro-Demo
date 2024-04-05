import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://joyful-sorbet-36fb6e.netlify.app/",
  integrations: [preact()]
});