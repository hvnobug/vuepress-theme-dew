---
title: SSR 订阅
commentid: theme-document
---

## 使用

在 `.vuepress/config.js中配置站点信息`

```javascript
export default {
    themeConfig: {
        site:'https://hvnobug.com'
    }
}
```

## 配置

详细配置信息,请移步[官方文档](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

```javascript

// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://webmasterish.com',
};
```

在 `frontmatter` 中配置

```yaml
---
title: Page Title

feed:
  enable: true
  title: Title used in feed
  description: Description used in feed
  image: /public/image.png
  author:
    -
      name: Author
      email: author@doamin.tld
      link: http://doamin.tld
  contributor:
    -
      name: Contributor
      email: contributor@doamin.tld
      link: http://doamin.tld

---
```

::: block
如果满足以下条件之一，则页面将自动添加为供稿项：

* frontmatter.feed.enable === true
* frontmatter.type === 'post'
如果您需要排除满足上述条件之一的特定页面，则可以使用`frontmatter.feed.enable === false`。
有关如何过滤网页的详细信息，请参见中的[PLUGIN.is_feed_page()](https://github.com/webmasterish/vuepress-plugin-feed/blob/master/index.js)。
:::
