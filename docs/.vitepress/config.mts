import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Konrad Sikorski — IT Student Portfolio',
  description: 'NJIT Information Technology student. See my web projects, what I built, how I checked it, and my résumé.',
  base: '/portfolio/',
  cleanUrls: true,
  srcExclude: ['parts/**'],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Version A', link: '/a' },
      { text: 'Version B', link: '/b' },
      { text: 'Résumé', link: '/resume' },
      { text: 'Plan', link: '/plan' },
      { text: 'Reviews', link: '/reviews' }
    ],
    sidebar: [
      {
        text: 'Portfolio',
        items: [
          { text: 'Version A (projects first)', link: '/a' },
          { text: 'Version B (problem-solving first)', link: '/b' },
          { text: 'Résumé', link: '/resume' }
        ]
      },
      {
        text: 'Portfolio record',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Plan', link: '/plan' },
          { text: 'Résumé & profile drafts', link: '/materials' },
          { text: 'Build record', link: '/build' },
          { text: 'Reviews & changes', link: '/reviews' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KonradSikorski5' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/konrad-sikorski-3406323b0/' }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    footer: {
      message: 'Course work for IS117-005 at NJIT. Planned items are labeled as planned.'
    }
  }
})
