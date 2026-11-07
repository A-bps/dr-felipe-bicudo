import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE_URL ?? 'https://drfelipebicudo.com.br',
  base: process.env.ASTRO_BASE_PATH ?? '/',
  output: 'static',
  devToolbar: { enabled: false },
  vite: { server: { headers: { 'X-Robots-Tag': 'noindex, nofollow' } }, preview: { headers: { 'X-Robots-Tag': 'noindex, nofollow' } } },
});