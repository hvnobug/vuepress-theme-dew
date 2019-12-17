---
title: 评论
commentid: theme-document
---


## 使用 Gitalk

::: tip
需要 **GitHub Application**，如果没有 [点击这里申请](https://github.com/settings/applications/new)，`Authorization callback URL` 填写当前使用插件页面的域名。
:::

### 快速使用

> 在`.vuepress/config.js`配置插件

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: 'GitHub Application Client ID',
          clientSecret: 'GitHub Application Client Secret',
          repo: 'GitHub repo',
          owner: 'GitHub repo owner',
          admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
          distractionFreeMode: false 
        }
      }
    ]
  ]
}
```

::: tip 提示:
如果要访问诸如`$frontmatter`和的变量`window`，请使用 EJS 语法。
:::

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          id: '<%- frontmatter.commentid || frontmatter.permalink %>',
          title: '「Comment」<%- frontmatter.title %>',
          body: '<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>',
          clientID: 'GitHub Application Client ID',
          clientSecret: 'GitHub Application Client Secret',
          repo: 'GitHub repo',
          owner: 'GitHub repo owner',
          admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
          distractionFreeMode: false,
        }
      }
    ]
  ]
}
```

::: warning 注意:
切勿在插件配置中使用回调函数，该函数会被`vuepress`过滤。
:::


### gitalk 配置项

- **clientID** `String` 

  **必须**. GitHub Application Client ID.

- **clientSecret** `String` 

  **必须**. GitHub Application Client Secret.

- **repo** `String` 

  **必须**. GitHub repository.

- **owner** `String` 

  **必须**. GitHub repository 所有者，可以是个人或者组织。

- **admin** `Array` 

  **必须**. GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。

- **id** `String` 
  
  Default: `location.href`.

  页面的唯一标识。长度必须小于50。
  
- **number** `Number` 
  
  Default: `-1`.

  页面的 issue ID 标识，若未定义`number`属性则会使用`id`进行定位。

- **labels** `Array` 
  
  Default: `['Gitalk']`.

  GitHub issue 的标签。

- **title** `String` 
  
  Default: `document.title`.

  GitHub issue 的标题。

- **body** `String` 
  
  Default: `location.href + header.meta[description]`.

  GitHub issue 的内容。

- **language** `String` 
  
  Default: `navigator.language || navigator.userLanguage`.

  设置语言，支持 [en, zh-CN, zh-TW]。

- **perPage** `Number` 
  
  Default: `10`.

  每次加载的数据大小，最多 100。

- **distractionFreeMode** `Boolean` 
  
  Default: false。

  类似Facebook评论框的全屏遮罩效果.

- **pagerDirection** `String`

  Default: 'last'

  评论排序方式， `last`为按评论创建时间倒叙，`first`为按创建时间正序。

- **createIssueManually** `Boolean` 
  
  Default: `false`.

  如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 `true`，则显示一个初始化页面，创建 issue 需要点击 `init` 按钮。

- **proxy** `String` 

  Default: `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`.

   GitHub oauth 请求到反向代理，为了支持 CORS。 [为什么要这样?](https://github.com/isaacs/github/issues/330)

- **flipMoveOptions** `Object` 
  
  Default:
  ```js
    {
      staggerDelayBy: 150,
      appearAnimation: 'accordionVertical',
      enterAnimation: 'accordionVertical',
      leaveAnimation: 'accordionVertical',
    }
  ```

  评论列表的动画。 [参考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)

- **enableHotKey** `Boolean` 
  
  Default: `true`.

  启用快捷键(cmd|ctrl + enter) 提交评论.


## 使用 Valine


> [Valine](https://valine.js.org/)是一款基于[LeanCloud](https://www.leancloud.cn/)的快速、简洁且高效的无后端评论系统。

### 快速使用

> 将 `vuepress-plugin-comment` 添加到`vuepress`项目的插件配置中：

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#vuepress-plugin-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ]
  ]
}
```

::: tip 提示:
如果要访问诸如`$frontmatter`和的变量`window`，请使用 EJS 语法。
:::


```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey',
          path: '<%- frontmatter.commentid || frontmatter.permalink || frontmatter.to.path %>'
        }
      }
    ]
  ]
}
```
::: block 
建议使用上面的配置,虽然该插件已在`frontmatter.to`对象和`frontmatter.from`对象中注册了正确的路由信息。
但是直接获取 `window.location.pathname` 返回的`frontmatter.from`的路径,所以建议直接使用 `frontmatter.to`的路径
:::
### valine 配置项

#### el
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

Valine 的初始化挂载器。可以是一个`CSS 选择器`，也可以是一个实际的`HTML元素`。

#### appId
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

从`LeanCloud`的应用中得到的`appId`.

> [获取APP ID 和 APP Key](/quickstart.html)。

#### appKey
- 类型:`String`
- 默认值:`null`
- 必要性:`true`

从`LeanCloud`的应用中得到的`APP Key`.

> [获取APP ID 和 APP Key](/quickstart.html)。


#### <del>region</del>
- 类型:`String`
- 默认值:`cn`
- 必要性:`false`

存储节点：在`Valine`中初始化时默认遵循`Leancloud SDK`的节点规则(`默认中国大陆节点`)。

> Leancloud js-sdk 从 `v3.8.0`版本开始删除了`region`选项:  
> [leancloud/javascript-sdk/releases/tag/v3.8.0](https://github.com/leancloud/javascript-sdk/releases/tag/v3.8.0)

可选值:
- `cn` - 中国大陆节点
- `us` - 海外节点

#### placeholder
- 类型:`String`
- 默认值:`Just go go`
- 必要性:`false`

评论框`占位提示符`。

#### notify
- 类型:`Boolean`
- 默认值:`false`
- 必要性:`false`

评论回复邮件提醒，请参考[配置](https://github.com/xCss/Valine/wiki/Valine-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F%E4%B8%AD%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8F%90%E9%86%92%E8%AE%BE%E7%BD%AE)。

#### verify
- 类型:`Boolean`
- 默认值:`false`
- 必要性:`false`

验证码服务。


#### path
- 类型:`String`
- 默认值:`window.location.pathname`
- 必要性:`false`

当前`文章页`路径，用于区分不同的`文章页`，以保证正确读取该`文章页`下的评论列表。  
可选值：
- `window.location.pathname` (默认值，推荐)
- `window.location.href`
- `自定义` 

> - I. 请保证每个`文章页`路径的唯一性，否则可能会出现不同`文章页`下加载相同评论列表的情况。  
> - II. 如果值为`window.location.href`，可能会出现随便加`不同参数`进入该页面，而被判断成新页面的情况。



#### avatar
- 类型:`String`
- 默认值:`mm`
- 必要性:`false`

`Gravatar` 头像展示方式。

可选值：
- `''`(空字符串)
- `mp`
- `identicon`
- `monsterid`
- `wavatar`
- `retro`
- `robohash`
- `hide` 

更多信息，请查看[头像配置](/avatar.html)。

#### meta
- 类型:`Array`
- 默认值:`['nick','mail','link']`
- 必要性:`false`

评论者相关属性。


#### pageSize
- 类型:`Number`
- 默认值:`10`
- 必要性:`false`

评论列表分页，每页条数。

#### lang
- 类型:`String`
- 默认值:`zh-cn`
- 必要性:`false`

多语言支持。

可选值：
- `zh-cn`
- `en`

如需自定义语言，请参考[i18n](/i18n.html)。

#### visitor
- 类型:`Boolean`
- 默认值:`false`
- 必要性:`false`

[文章访问量统计](/visitor.html)。

#### highlight
- 类型：`Boolean`
- 默认值: `true`
- 必要性: `false`

`代码高亮`，默认开启，若不需要，请手动关闭

#### avatarForce
- 类型: `Boolean`
- 默认值: `false`
- 必要性: `false`
  
每次访问`强制`拉取最新的`评论列表头像`

> 不推荐设置为`true`，目前的`评论列表头像`会自动带上`Valine`的版本号

#### recordIP
- 类型: `Boolean`
- 默认值: `false`
- 必要性: `false`

是否记录评论者IP

> `v1.3.5+`

#### serverURLs  
- 类型: `String`
- 默认值: `http[s]://[tab/us].avoscloud.com`
- 必要性: `false`

## 隐藏评论页面

::: tip 
如果要在指定页面中隐藏注释插件，请将`$frontmatter.comment`或设置`$frontmatter.comments`为 false。
:::

```yaml
---
comment: false 
# comments: false 
---
```

## 配置

- **choosen** `string`

  **Required**.

- **options** `object`

  **Required**. 评论插件的选项。

- **container** `string`

  **Optional, 默认为 `'main.page'`**. 包含选择的注释插件的 dom 选择器。
