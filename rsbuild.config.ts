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
})
