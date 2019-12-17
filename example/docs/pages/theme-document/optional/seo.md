---
title: Seo
commentid: theme-document
---

## 谷歌分析

::: warning
当前，如果您使用的是Google Analytics（分析）插件，我们建议使用Yarn而不是npm来安装所有依赖项，因为在这种情况下npm无法生成正确的依赖关系树。
:::

### 安装

``` bash
yarn add -D @vuepress/plugin-google-analytics
# OR npm install -D @vuepress/plugin-google-analytics
```

### 使用

```javascript
module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ]
}
```

### 选项
 

#### GA
* **类型**： `string`
* **默认**： `undefined`
提供Google Analytics（分析）ID以启用集成。

##  百度站点自动推送

### 安装

``` bash
npm install -D vuepress-plugin-baidu-autopush
# OR yarn add -D vuepress-plugin-baidu-autopush
```

### 使用

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-baidu-autopush'
  ]
};

// or

module.exports = {
  plugins: {
    'vuepress-plugin-baidu-autopush':{}
  }
};
```
## 生成站点地图

### 安装

``` bash
npm install vuepress-plugin-sitemap
# OR 
yarn add vuepress-plugin-sitemap
```

### 使用

```javascript
// .vuepress/config.js
module.exports = {
  plugins: {
    'sitemap': {
      hostname: 'https://hvnobug.com'
    },
  }
}
```

### 选项

```yaml
hostname:
  type: string
  required: true
  default: null
  description: website root url
  example: https://pake.web.id

outFile:
  type: string
  required: false
  default: sitemap.xml
  description: sitemap file name
  example: sitemap.txt

urls:
  type: array
  required: false
  default: [],
  description: custom urls to append
  example: [
    { url: '/place', changefreq: 'montly'}
  ]

exclude:
  type: array
  required: false
  default: [],
  description: pages path to exclude
  example: ['/404.html']

dateFormatter:
  type: function
  required: false
  description: change the date format
  default: time => new Date(time).toISOString()
```

### frontmatter 选项

`frontmatter` 选项会覆盖特定页面的全局选项，我们可以`sitemap`在最前面使用 key，目前我们只有2个选项，分别是`exclude`和`changefreq`。

```yaml
---
sitemap:
  exclude: false
  changefreq: hourly
---
# Content Updated Frequently
```

::: block 注意:
其它选项的站点地图，可以使用所有选项除了通过`urls`，`hostname`，`cacheTime`，`xslUrl`，`xmlNs`和`outFile`将传递给sitemap.createSitemap构造函数。
:::

## 生成 Seo 头信息

👀 See [Vuepress Plugin SEO](https://github.com/lorisleiva/vuepress-plugin-seo)
