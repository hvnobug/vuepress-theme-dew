---
title: mathjax 渲染
commentid: theme-document
---

> 让你的 `VuePress` 站点中的 `Markdown` 文件支持 `TeX` 语法。

## 安装

> 使用`npm`后者`yarn`安装插件


```bash
npm install vuepress-plugin-mathjax
# OR
yarn add vuepress-plugin-mathjax
```

## 使用

> 在`.vuepress/config.js`配置插件

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
}
```

## 配置项

标有 `frontmatter`记号的配置在 VuePress 1.0.0-alpha.39 以上的版本中将允许写在页面的 `frontmatter` 的 `mathjax` 选项中。例如：

```yaml
---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

```

### target
* 类型: `'svg' | 'chtml'`
* 默认值: `chtml`
MathJax 的输出格式。

### packages
* 类型: `string | string[]`
* 默认值: 所有可以加载的 `MathJax` 包
设置使用的 `MathJax` 包。

### macros
* 类型: `{ [key: string]: string | null }`
默认值: `{}`
输入的宏将与内置的宏进行混合。如果要取消一个内置的宏替换，可以将对应的值设为 null。下面是一张内置宏的列表：

### presets frontmatter
类型: `string | string[]`
默认值: `[]`
要添加的预设内容。预设内容会自动插入到要编译的 TeX 代码前。

### showError 
> vuepress 1.0.0-alpha.40+

类型: `boolean`
默认值: `process.env.NODE_ENV === 'development'`
当遇到编译错误时，是否要在控制台输出错误信息。

### cache
type: `false | object`
default: `{}`


[LRU Cache](https://github.com/isaacs/node-lru-cache) 选项。如果设为 `false`，将不会使用缓存。



## 语法

### 行内语法

使用单个 `$` 围绕一段 TeX 语法进行内联渲染。

~~~text
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
~~~

> Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.


### 块语法


::: block 输入:
~~~
$$
\frac {\partial^r} {\partial \omega^r} 
\left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) 
\left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r 
\cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$
~~~
:::


::: tip 输出:
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
:::



## 使用宏

> 在`config.js`配置宏

```javascript
module.exports = {
  plugins: {
    mathjax: {
      macros: {
        '\\Z': '\\mathbb{Z}'
      }
    }
  }
}
```
::: block 输入:
若 $a, n\in\Z$，则 $a>n <=> a>=n+1$。
:::


::: tip 输出:
若 $a, n\in\Z$，则 $a>n <=> a>=n+1$。
:::



## 演示

::: block 输入:
~~~
假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1
~~~
:::

::: tip 输出:
假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1
:::
