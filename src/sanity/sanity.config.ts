import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Flower Shop CMS',
  projectId: 'ilxd7zjn',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [],
  },
})