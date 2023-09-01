---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "夜夙夙"
  text: "心中有明月，碎碎圆圆"
  # tagline: 
  # image:
  #   src: /tx1.jpg
  #   alt: avatar
  actions:
    # - theme: brand
    #   text: 落魄山
    #   link: /剑来/落魄山
    - theme: alt
      text: 前端笔记
      link: /前端/js/javascript基础第一天笔记
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 自定义组件 -->
<script setup>
import home from './.vitepress/components/home.vue';
import musicPlayer from './.vitepress/components/musicPlayer.vue'
</script>
## Markdown Content

<home />