---
title: 安装
commentid: theme-document
---

## 安装 vuepress


### 全局安装

```bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress
```

### 现有项目
```bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress
```

## 安装 dew 主题


```bash
npm install vuepress-theme-dew -dev--save # 或者: yarn add vuepress-theme-dew -D
```


## 使用 dew 主题

> 在`.vuepress/config.js`配置主题

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'dew'
}  
```


