import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'auto',
  },
  html: {
    title: '@jbrowse/react-linear-genome-view rsbuild demo',
  },
  source: {
    // Add fallbacks for Node.js built-in modules
    alias: {
      // Set fs module to false in browser environment
      fs: false,
    },
  },
})
