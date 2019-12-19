---
title: 演示

---


## 代码高亮


```bash
git clone -b demo https://github.com/hvnobug/vuepress-theme-dew.git
cd vuepress-theme-dew-demo
npm install
npm run dev
```


## 测试 block

::: block
这是一个 block
:::

## 测试图标

<vp-icon name="theme" size="5rem" color="red"/>


## 测试流程图

Copyright © Hvnobug
Link: https://hvnobug.com/pages/theme-document/extension/markdown.html

@flowstart ant
st=>start: Start:>https://github.com/hvnobug/[blank]
e=>end:>https://github.com/hvnobug/
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>https://github.com/hvnobug/
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1
@flowend


## 测试 tab 选项卡



:::: tabs cache-lifetime="10" :options="{ useUrlFragment: false }"

::: tab "Tab Title" id="first-tab"
__markdown content__
:::


::: tab javascript id="second-tab"
``` javascript
() => {
  console.log('JavaScript code example')
}
```
:::

::::


## 测试目录组件

<TOC />
