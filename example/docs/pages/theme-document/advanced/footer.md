---
title: 页脚配置
commentid: theme-document
---


## 配置
> 在 `config.js`中配置 footer

```javascript
export default {
    themeConfig:{
         footer: {
            Copyright: {
                text: '豫ICP备18037410号-2',
                icon: {
                    name: 'beian',
                },
                link: {
                    url: 'http://www.miitbeian.gov.cn/',
                    target: '_blank'
                    
                }
            },
            Author: {
                text: 'Hvnobug',
                icon: {
                    name: 'author'
                },
                link: {
                    url: '/'
                }
            },
        },
    }
}
```

## 选项

### text
* **type** :`string`
* **require** : true
### icon
* **type** : `object`
* **require** : false
可选,svg 图标,图标配置[参考](/pages/theme-document/advanced/icon.html#选项)
### link
* **type** :`object`
* **require** : false
#### url
* **type** :`string`
* **require** : true
链接地址
#### target
* **type** :`string`
* **require** : false
同`a`标签的`target`属性
