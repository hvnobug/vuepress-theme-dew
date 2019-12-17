---
title: Markdown
commentid: theme-document
---

## block 块

新增 `block` 块功能

<hr/>

```
::: block 提示
这是一个`block`块
:::
```

<hr/>

::: block 提示
这是一个`block`块
:::



## 代码块


```javascript
() => {
  console.info(typeof null);
}
```


> 开启行号显示

```javascript
// .vuepress/config.js
export default {
    markdown: {
        lineNumbers: true
    },
};
```


## 流程图


~~~markdown
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
~~~



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



更多操作请移步[vuepress-plugin-flowchart](https://flowchart.vuepress.ulivz.com/)


## tab 选项卡



> 选项卡之后的所有内容都将作为属性传递给选项卡组件。

~~~ markdown
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

~~~


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


> 选项卡之后的所有内容都将作为属性传递给选项卡组件。
> 任何没有名称的值都将作为name属性传递。多字名称必须用引号括起来。
> 只有一个这样的值是有效的。

~~~ markdown
:::: tabs

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

~~~


:::: tabs

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


更多操作请移步[vuepress-plugin-tabs](https://github.com/pskordilakis/vuepress-plugin-tabs)



