---
title: 代码复制
commentid: theme-document
---

## 安装

> 使用`npm`后者`yarn`安装插件

```bash
npm install vuepress-plugin-code-copy
# OR
yarn add vuepress-plugin-code-copy
```

## 使用

> 在`.vuepress/config.js`配置插件


```javascript
// .vuepress/config.js
module.exports = {
    plugins: [['vuepress-plugin-code-copy', true]]
}
```

## 选项

`vuepress-plugin-code-copy` 带有许多选项,可以与 options 对象中的插件配置一起传递

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    ["vuepress-plugin-code-copy", 
        {
            selector: String,
            align: String,
            color: String,
            backgroundTransition: Boolean,
            backgroundColor: String,
            successText: String
        }
    ]
  ]
}
```

### selector
* 类型： String
* 默认： div[class*="language-"] pre
这是复制按钮组件将附加到的CSS 选择器。

### align
* 类型： String
* 默认： bottom
* 支持的选项：top 和 bottom
此选项描述复制按钮组件的垂直位置以及 `successText`

### color
* 类型： String
* 默认： #27b1ff
这将设置复制按钮的颜色，并且可以采用任何十六进制代码。

### backgroundTransition
* 类型： Boolean
* 默认： true
当用户按下复制按钮时，启用附加代码块的背景过渡动画。

### backgroundColor
类型： String
默认： #0075b8
这将设置背景过渡动画的颜色，并且可以采用任何十六进制代码。

### successText
* 类型： String
* 默认： Copied!
这将设置用户按下复制按钮时显示的文本。
