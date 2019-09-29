---
sidebarDepth: 2
---

## 介绍

配合列表组件生成列表页，支持自定义data和methods。

## 引入

```js
import listPage from '/src/render/listPage'

listPage({参数、方法})
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

## 自定义过滤条件

定义过滤条件表单，需要通过函数返回。过滤组件配置参考表单渲染函数内的[bizObj](./form.html#bizobj)

::: warning 主要
filter只能返回数组，基础组件（数组内的每个对象）必须手动设置path，另外，部门、人员、时间区间、拖拽条组件需要设置component属性（其他不用）。
:::

```js
filter() {
  return [
    {
      path: 'filter[1]',
      label: '申请部门',
      key: 'apply_dept',
      component: 'e-dept-chooser',
      max: 1
    },
    ...
  ]
}
```

过滤组件的插槽为filter

```html
<view slot="filter" style="background: rgba(25, 31, 37, .05);">
  <e-picker model="{{filter[0]}}"></e-picker>
</view>
```

## 方法

::: warning 注意
onPullDownRefresh方法已自动实现，功能是刷新列表。
:::

### onReady

原生钩子函数，目前只实现了一个原生钩子。

### afterLoad

加载后触发的钩子钩子函数，参数为数组。

### beforeFilter

过滤请求发送前触发，参数为过滤对象。

### refresh

列表刷新。

### checkboxInvisible

退出多选模式。

### 其他方法

其他方法定义方式：

```js
methods: {
    func1() {},
    func2() {},
    ...
}
```

## 按钮事件

动态按钮触发的方法需要在methods里定义。动态按钮触发时会先到this.$page寻找对应方法，如果没有找到，则会到列表组件内寻找。

列表组件实现了handleAdd和handleDelete方法，对应新增按钮和批量删除按钮，因此，在定义按钮时，如果新增和删除没有特殊逻辑，我们只需要设置按钮的方法为这两个就可以。

如果有特殊逻辑，方法名也不用特别修改，只需要在methods里面重写handleAdd或者handleDelete即可。

所有动态按钮触发的方法都有两个参数：

- btn：当前按钮对象。
- checkedArray：当前已勾选的数据合集（数组）。