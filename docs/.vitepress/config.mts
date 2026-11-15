import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Konrad Sikorski — Portfolio',
  description: 'Portfolio plan and process record for Konrad Sikorski (IS117-005, NJIT).',
  base: '/portfolio/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Plan', link: '/plan' },
      { text: 'Reviews', link: '/reviews' }
    ],
    sidebar: [
      {
        text: 'Portfolio record',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Plan', link: '/plan' },
          { text: 'Reviews & changes', link: '/reviews' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'Course work for IS117-005 at NJIT. Planned items are labeled as planned.'
    }
  }
})
