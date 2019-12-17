---
title: 快速开始
commentid: theme-document
---

## 从 Demo 开始

### clone 到本地

```bash
git clone https://github.com/hvnobug/vuepress-theme-dew-demo.git
```


### 安装 npm 依赖
```bash
cd vuepress-theme-dew-demo
npm install # 或者: yarn install
```


### 启动
```bash
vuepress dev docs
```


## 从 Theme 开始

### clone 到本地


```bash
git clone -b demo https://github.com/hvnobug/vuepress-theme-dew.git
```



### 安装 npm 依赖
```bash
cd vuepress-theme-dew-demo
npm install # 或者: yarn install
```


### 启动
```bash
yarn run test
# or
npm run test
```

::: tip
如果使用简历页面:
:::

#### 预览简历

```bash
yarn run resume-dev
# or
npm run resume-dev
```

访问 `http://localhost:9000/pages/resume/`

#### 构建项目

```bash
yarn run build
# or
npm run build
```

简历页面相关配置请移步[添加简历](/pages/theme-document/optional/resume.html)
