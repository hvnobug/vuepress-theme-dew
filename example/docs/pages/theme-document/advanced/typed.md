---
title: 打字效果
commentid: theme-document
---

::: block
* 默认关闭打字效果,
* 打字效果只对主页的描述生效
* 可以使用一言APi,也可以自定义配置
:::

![](https://cdn.jsdelivr.net/gh/hvnobug/assets/home/post/images/typed-preview.gif)


## 开启打字效果

```javascript
export default {
    themeConfig:{
         typed: {
            enable: true
        },
    }
}
```



## 使用一言Api

```javascript
export default {
    themeConfig:{
         typed: {
            enable: true,
            hitokoto: true
        },
    }
}
```

## 使用自定义配置

```javascript
export default {
    themeConfig:{
         typed: {
            enable: true,
            hitokoto: false,
            subTitle1: 'Welcome',
            subTitle2: 'This is my vuepress website !',
            startDelay: 300,
            typeSpeed: 100,
            loop: true,
            backSpeed: 50,
            showCursor: true
        },
    }
}
```

::: tip
如果开启一言Api,`subTitle2`配置将会失效
:::


## 配置参数

请参考[官方 Github 文档](https://github.com/mattboldt/typed.js/#customization)
