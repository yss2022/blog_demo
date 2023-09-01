import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "yss",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/tx2.jpg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端笔记',
        items: [
          {
            text: 'js',
            link: '/前端/js/javascript基础第一天笔记'
          },
          {
            text: 'css',
            link: '/前端/css/flex'
          }
        ]
      },
      { text: '剑来', link: '/剑来/落魄山' },
      { text: '博客初始化', link: '/初始化' },

    ],

    sidebar: [
      {
        text: 'js基础',
        items: [
          { text: 'Day 1', link: '/前端/js/javascript基础第一天笔记' },
          { text: 'Day 2', link: '/前端/js/javascript基础第二天笔记' },
          { text: 'Day 3', link: '/前端/js/javascript基础第三天笔记' },
          { text: 'Day 4', link: '/前端/js/javascript基础第四天笔记' },
          { text: 'Day 5', link: '/前端/js/javascript基础第五天笔记' },
        ]
      },
      {
        text: 'css',
        items: [
          {
            text: 'flex布局',
            link: '/前端/css/flex'
          }
        ]

      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
