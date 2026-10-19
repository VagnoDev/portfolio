import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://vagno.dev',
    server: {
    allowedHosts: ['vagno.dev', 'www.vagno.dev']
  }
});
