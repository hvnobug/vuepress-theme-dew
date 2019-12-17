---
title: 平滑滚动
commentid: theme-document
---

::: block 提示

* 第一个仅对 `<RouterLink to="#anchor"`> 生效
* 第二个则对 `<RouterLink to="#anchor">` 和 `<a href="#anchor">` 都生效
这两种特性的浏览器兼容性并不一样，所以目前我们同时使用了这两种特性。

为了更好的浏览器兼容性，我们建议你尽量在你的 markdown 文件中使用 `<RouterLink to="#anchor">`。

:::


## 安装

> 使用`npm`后者`yarn`安装插件


```bash
npm install vuepress-plugin-smooth-scroll 
# OR
yarn add vuepress-plugin-smooth-scroll
```

## 使用

> 在`.vuepress/config.js`配置插件

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-smooth-scroll']
}
```
