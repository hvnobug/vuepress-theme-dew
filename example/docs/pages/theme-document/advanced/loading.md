---
title: 加载页面
commentid: theme-document
---

效果如图:
![](https://cdn.jsdelivr.net/gh/hvnobug/assets/home/post/images/loading-page-preview.gif)


> 标题默认取站点标题,描述默认取站点描述

自定义配置

```javascript
// .vuepress/config.js
export default {
    themeConfig:{
        loadingPage:{
            title: 'Title',
            description:'Description',
            image: '/images/loading.gif' // 加载图
        }
    }
}
```

