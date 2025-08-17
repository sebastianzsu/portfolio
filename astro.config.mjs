// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianzsu.github.io',
  base: '/portfolio2',
  vite: {
    plugins: [tailwindcss()],
  },
});
