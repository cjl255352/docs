---
sidebarDepth: 2
---

## 介绍

列表组件包含顶部搜索栏、过滤框、多旋状态下的顶栏，右下角动态按钮等部分。搭配[列表渲染函数](../../render/list)，可以快速生成一个列表页面，**不建议单独使用**。

## 属性

### btnPos

- 类型：`object`
- 默认值：`{normal: 10, edit: 11}`

列表的动态按钮分为两种：普通状态为normal，编辑状态（长按某条数据）为edit。在定义时，需要配置不同的位置。

### bizObj

- 类型：`object`
- 默认值：无

包含三个字符串属性：
1. url：列表的请求地址。
2. template：模板名称，参考本页列表模板。
3. form：表单路由。

### background

- 类型：`string`
- 默认值：`'#FFF'`

列表背景，参考css内background。

### searchBar

- 类型：`object`
- 默认值：`{bindkey: '', placeholder: '搜索'}`

搜索栏配置，bindkey代表搜索的字段。

### params

- 类型：`object`
- 默认值：`{}`

请求参数，会覆盖默认的请求参数。

### filter

- 类型：`object`
- 默认值：`{}`

过滤参数，会覆盖默认的过滤参数。

## 事件监听

|事件|参数|功能|
|-|-|-|
|add|`{type: 'add', data: {}}`|向列表内新增一条数据|
|edit|`{type: 'edit', index: 0, data: {}}`|将索引为index的项替换为data|
|refresh|`{type: 'refresh'}`|刷新列表，会清口搜索框内的值|
|checkboxInvisible|`{type: 'checkboxInvisible'}`|退出多选模式|

## 列表模板

小程序模板请参考：[https://ding-doc.dingtalk.com/doc#/dev/axml](https://ding-doc.dingtalk.com/doc#/dev/axml)

::: tip 提示
模板是列表内每一项的axml+acss。
:::

配置文件位置：`src/components/e-list/template/index.axml`

模板接收的值为一个对象，包含当前项的所有信息。

## 钩子函数

### afterLoad

- 触发时机：每次请求完成后，渲染之前。
- 参数：包含每个列表单项的数组。