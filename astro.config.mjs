import { defineConfig } from 'astro/config'
import sanity from '@sanity/astro'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

export default defineConfig({

  output: "server",
  adapter: vercel(),

  integrations: [sanity({
    projectId: '14be0l9l',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    // apiVersion: "2024-09-21", // insert the current date to access the latest version of the API
    studioBasePath: '/admin',
    stega: {
      studioUrl: "/admin",
    },
  }), react(), tailwind()],
})