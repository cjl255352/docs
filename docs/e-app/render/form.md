---
sidebarDepth: 2
---

## 介绍

配合表单组件生成表单页，支持自定义data和methods。表单页面有两种打开方式，一种是新增，一种是点击列表内的某一项进行查看或者编辑。

## 引入

```js
import formPage from '/src/render/formPage'

formPage({参数、方法})
```

## 自定义数据

定义方式类似vue，需要通过函数返回。

```js
data() {
  return {
    key: 'value'
  }
}
```

## 属性

### detail

- 类型：`boolean`
- 默认值：false

表单是否含有明细表，区别在于提交时的数据结构差异。

### bizObj

- 类型：`array`
- 默认值：空

**生成表单的基本**，其中每个对象定义一个基础组件。以下为示例：

```js
bizObj: [
  {
    label: '请购单号',
    key: 'doc_number',
    component: 'e-input',
    disabled: true,
    placeholder: '系统自动生成'
  },
  {
    label: '请购部门',
    key: 'apply_dept',
    component: 'e-dept-chooser',
    necessary: true,
    max: 1,
    validate: (val) => {
      return val符合校验规则 ? true : false
    }
  },
  {
    label: '耗材',
    key: 'children',
    component: 'e-subform',
    subform: [
      {
        label: '耗材名称',
        key: 'cons_id',
        component: 'e-search',
        bindlist: '/pages/hy/base/cons/list/index',
        bindkey: 'cons_name',
        necessary: true
      }
    ]
  }
]
```

说明：
- 数组内每个对象里的属性（除component属性）都为对应基础组件的属性。
- component属性规定此对象渲染成哪种基础组件。
- 子表（e-subform）组件集成在表单组件内。
- validate属性是一个方法，代表此组件的自定义校验方式。

## 方法

### beforeOnLoad

钩子函数，参数同原生onLoad，触发时机为设置业务对象之前，此函数要求返回一个Promise对象，因为有些操作需要保证同步。

### afterOnLoad

钩子函数，参数同原生onLoad，触发时机为设置业务对象之后。

### onReady

原生onReady。

### formChange

表单内任意基础组件的value发生变化时触发，参数为对应基础组件的value。此函数会在页面onUnload触发时销毁。

### saveForm

保存方法，无特殊逻辑的保存行为，内部逻辑如下：

- 校验：根据组件内的validate判断，不通过则中断函数，并弹出提示，提示内容根据基础组件。
- 格式化提交数before据：生成一个对象，包含bizObj内的所有基础组件的value，value的key为组件定义时传入的key，value本身未作任何处理。子表的key为children。
- 触发钩子函数beforeSubmit（如果存在）。
- 和原始的表单数据合并（如果存在）。
- 发请求。

### beforeSubmit

提交前钩子函数，参数为saveForm方法的第二步生成的对象，该函数必须返回Promise对象。

### handlePost

类似saveForm，不同点在于增加了多个可以配置的点，接收一个config对象，可配置属性如下：

|属性|作用|默认行为|可选值|
|-|-|-|-|
|autoCheck|是否自动校验|否|`boolean`|
|url|提交地址|无|`string`|
|successText|成功的提示|保存成功|`string`|
|refresh|成功后是否刷新列表|刷新|`boolean`|
|return|成功后是否返回|返回|`boolean`|
|failText|失败的提示|保存失败|`string`|


