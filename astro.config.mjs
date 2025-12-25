// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
	site: 'https://penanti-pte.vercel.app', // Change to your repo name
	output: 'static', // Remove adapter for simplicity
	integrations: [
    mdx(), 
    sitemap(),
    robotsTxt({
      sitemap: true, // Auto-link to sitemap
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/dashboard/', '/api/'],
        }
      ]
    })
  ],
});
