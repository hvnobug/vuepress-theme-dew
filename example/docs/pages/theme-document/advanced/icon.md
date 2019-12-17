---
title: 主题图标
commentid: theme-document
---

:::  block
主题使用的是 Svg 图标
:::

## 主题自带图标


name | icon
:---:|:---:
about| <vp-icon name="about"/>
resume | <vp-icon name="resume"/> 
beian | <vp-icon name="beian"/>  
data| <vp-icon name="data"/>
author | <vp-icon name="author"/> 
power | <vp-icon name="power"/>  
document| <vp-icon name="document"/>
home | <vp-icon name="home"/> 
rocket | <vp-icon name="rocket"/>  
blog| <vp-icon name="blog"/>
copyright | <vp-icon name="copyright"/> 
wordpress | <vp-icon name="wordpress"/>  
vue| <vp-icon name="vue"/>
github | <vp-icon name="github"/> 
theme | <vp-icon name="theme"/>  

## 自定义图标


::: tip 本地图标:
在`.vuepress`目录下新建`icons`目录用于存储 Svg 图标,图标前缀为`icon-`
:::


> 推荐使用[阿里巴巴失量图标库](https://www.iconfont.cn/),支持`Unicode`、`Font class`和`Symbol`。请参考[帮助文档](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)

## 使用图标

可直接在 vue 、 markdown 中使用图标

```vue
<vp-cion name="home"/>
```

## 选项
### name
* **类型**： `string`
* **必须**:  `true`
图标名称
### size
* **类型**： `string`
* **必须**:  `false`
图标大小
### color
* **类型**： `string`
* **必须**:  `false`
图标颜色

```vue
<vp-cion name="home" size="1rem" color="#fff"/>
```
