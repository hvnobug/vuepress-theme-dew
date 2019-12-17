---
title: 代码切换器
commentid: theme-document
---

::: block
允许具有同步语言可切换代码块的组件（例如，在 `Java` 和 `Kotlin` 示例之间切换）。所选语言将持久保存到本地存储中，以使语言选择在页面请求中永久存在。

需要 `Vuepress` 1.0+
:::


## 演示

![](https://cdn.jsdelivr.net/gh/hvnobug/assets/home/post/images/code-tab-plugin-preview.gif)



## 安装

> 使用`npm`后者`yarn`安装插件


```bash
npm install vuepress-plugin-code-switcher --save
# OR
yarn add install vuepress-plugin-code-switcher
```

## 使用

> 在`.vuepress/config.js`配置插件

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'code-switcher'
  ],
};
```
## 示例

~~~markdown
<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>

```js
module.exports = function (str) {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>
~~~



<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>

```js
module.exports = function (str) {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>



> `<template>`如果要在组件中解释`Markdown`，则必须在标签及其内容之间使用额外的换行符。

## 配置
| 属性 | 描述 | 类型 | 默认 |
| ----- | ----- | ---- | ---- |
| languages | The languages that can be switched between. The object expects shorthands as keys and the tab title as values. The shorthands will also be used as slot names | Object | --- |
| name | All code switchers on one page with the same name will be synchronized | String | `'default'` |
| isolated | if true, this block will not synchronize with any others or load/save its state to/from localstorage | Boolean | `false` |
