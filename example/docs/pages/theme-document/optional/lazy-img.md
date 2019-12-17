---
title: 图片懒加载
commentid: theme-document
---


::: block 提示
`vuepress-plugin-img-lazy`将优先使用本机图像延迟加载
如果浏览器不支持,则将通过 lozad 实现
:::


## 安装

> 使用`npm`后者`yarn`安装插件


```bash
npm install vuepress-plugin-img-lazy
# OR
yarn add vuepress-plugin-img-lazy
```


## 使用

> 在`.vuepress/config.js`配置插件

```javascript
// .vuepress/config.js
module.exports = {
    plugins: [
        'img-lazy'
    ]
}
```

### 在 markdown 中使用

```markdown
![img](img.jpg)
# or
![img](img.jpg =500x300) <!-- better -->
<!-- or -->
<img data-src="img.jpg" loading="lazy" class="lazy">
```

### 作为组件使用

```javascript
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default {
  components: { ImgLazy }
}
```

```html
<template>
  <img-lazy src="img.jpg" />
</template>
```

## 选项

`vuepress-plugin-img-lazy`支持可选配置

### useLoading
* 类型: Boolean
* 默认: true

> 对网络使用本地图像延迟加载

### selector
* 类型: string
* 默认: lazy

> 图像的默认类别名称
