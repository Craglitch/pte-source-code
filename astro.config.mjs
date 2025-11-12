// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://your-project.vercel.app', // Change to your repo name
	output: 'static', // Remove adapter for simplicity
	integrations: [mdx(), sitemap()],
});
