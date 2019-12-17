---
title: 配置站点信息
commentid: theme-document
---



::: warning 注意
静态文件在`.vuepress/pubulic`目录下，配置文件为`.vuepress/config.js`
:::


## avatar 头像

```javascript
// .vuepress/config.js
module.exports = {
    themeConfig:{
        avatar: '/avatar.png' 
    }
} ;
```

## 站点 logo

```javascript
// .vuepress/config.js
module.exports = {
    themeConfig:{
        logo: '/logo.png' 
    }
} ;
```

## 站点标题

```javascript
// .vuepress/config.js
module.exports = {
    title:'hvnobug'
} ;
```

## 站点描述

```javascript
// .vuepress/config.js
module.exports = {
    description:'Welcome to my vuepress site!'
} ;
```
