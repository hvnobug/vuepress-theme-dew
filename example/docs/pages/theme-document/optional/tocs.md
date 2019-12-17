---
title: 目录组件
commentid: theme-document
---

::: tip 提示:
`[[toc]]`同样可以输出目录,只是`[[toc]]`只可以在 markdown 中使用，`vuepress-plugin-table-of-contents`是为我们注册一个生成目录的`vue`组件。
:::

## 生成局部目录
> 为你的 `VuePress` 站点增加目录组件。
  
### 安装

```bash
npm install vuepress-plugin-table-of-contents
# or
yarn add vuepress-plugin-table-of-contents
```

### 使用

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-table-of-contents'],
}
```

### 配置项

#### componentName
- **类型**:`string`
- **默认值**:`TOC`
组件的名称。

### 演示

输入:
~~~markdown
<TOC />
~~~


::: tip 输出:
<TOC />
:::

## 生成全局目录

::: tip
* 添加`<GlobalTableOfContents/>`您可以在降价中使用的组件，而不是`[[toc]]`获取全局目录，即覆盖整个`vuepress`网站的目录。
* 内部使用与检索侧栏中项目相同的功能
:::
  
### 安装

```bash
npm install vuepress-plugin-global-toc
# or
yarn add vuepress-plugin-global-toc
```

### 使用

```javascript
// .vuepress/config.js
module.exports = {
  plugins: ['vuepress-plugin-global-toc']
}
```


