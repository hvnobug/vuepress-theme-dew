---
title: 导航栏配置
commentid: theme-document
---

> 通过 themeConfig.nav 增加导航栏链接


```javascript
// .vuepress/config.js
export default {
  themeConfig:{
       nav: [
          {
              text: '主页'
          },
          {
              text: '关于',
          },
          {
              text: 'GitHub',
          }
      ]
  }  
};
```


## 设置链接

```javascript
// .vuepress/config.js
export default {
  themeConfig:{
       nav: [
          {
              text: '主页',link:'/'
          },
          {
              text: '关于',link:'/about/'
          },
          {
              text: 'GitHub',link:'https://github.com/hvnobug/'
          }
      ]
  }  
};
```

## 设置图标

::: tip
自定义图标请移步[自定义图标](/pages/theme-document/advanced/icon.html#自定义图标)
:::

```javascript
// .vuepress/config.js
export default {
  themeConfig:{
       nav: [
          {
              text: '主页',link:'/',icon:'home'
          },
          {
              text: '关于',link:'/about/',icon:'about'
          },
          {
              text: 'GitHub',link:'https://github.com/hvnobug/',icon:'github'
          }
      ]
  }  
};
```

### 设置图标颜色

```javascript
// .vuepress/config.js
export default {
  themeConfig:{
       nav: [
          {
              text: '主页',link:'/',icon:{
                  name:'home',
                  color:'red'
              }
          }
      ]
  }  
};
```

### 设置图标大小

```javascript
// .vuepress/config.js
export default {
  themeConfig:{
       nav: [
          {
              text: '主页',link:'/',icon:{
                  name:'home',
                  size:'1rem'
              }
          }
      ]
  }  
};
```

### 二级导航栏

```javascript
export default {
  themeConfig:{
       nav: [
           {
                text: '文档',
                icon: 'document',
                items: [
                    {text: 'Wordpress', link: '/document/wordpress/', icon: 'wordpress'}
                ]
           }
       ]
   }
};
```
