(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{226:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("配合表单组件生成表单页，支持自定义data和methods。表单页面有两种打开方式，一种是新增，一种是点击列表内的某一项进行查看或者编辑。")]),t._v(" "),s("h2",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" formPage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/src/render/formPage'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("formPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("参数、方法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义数据")]),t._v(" "),s("p",[t._v("定义方式类似vue，需要通过函数返回。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h3",{attrs:{id:"detail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detail","aria-hidden":"true"}},[t._v("#")]),t._v(" detail")]),t._v(" "),s("ul",[s("li",[t._v("类型："),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("默认值：false")])]),t._v(" "),s("p",[t._v("表单是否含有明细表，区别在于提交时的数据结构差异。")]),t._v(" "),s("h3",{attrs:{id:"bizobj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bizobj","aria-hidden":"true"}},[t._v("#")]),t._v(" bizObj")]),t._v(" "),s("ul",[s("li",[t._v("类型："),s("code",[t._v("array")])]),t._v(" "),s("li",[t._v("默认值：空")])]),t._v(" "),s("p",[s("strong",[t._v("生成表单的基本")]),t._v("，其中每个对象定义一个基础组件。以下为示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("bizObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请购单号'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'doc_number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    disabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    placeholder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'系统自动生成'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请购部门'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apply_dept'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e-dept-chooser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    necessary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val符合校验规则 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'耗材'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'children'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e-subform'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    subform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'耗材名称'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cons_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e-search'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bindlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/hy/base/cons/list/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bindkey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cons_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        necessary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("数组内每个对象里的属性（除component属性）都为对应基础组件的属性。")]),t._v(" "),s("li",[t._v("component属性规定此对象渲染成哪种基础组件。")]),t._v(" "),s("li",[t._v("子表（e-subform）组件集成在表单组件内。")]),t._v(" "),s("li",[t._v("validate属性是一个方法，代表此组件的自定义校验方式。")])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"beforeonload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeonload","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeOnLoad")]),t._v(" "),s("p",[t._v("钩子函数，参数同原生onLoad，触发时机为设置业务对象之前，此函数要求返回一个Promise对象，因为有些操作需要保证同步。")]),t._v(" "),s("h3",{attrs:{id:"afteronload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#afteronload","aria-hidden":"true"}},[t._v("#")]),t._v(" afterOnLoad")]),t._v(" "),s("p",[t._v("钩子函数，参数同原生onLoad，触发时机为设置业务对象之后。")]),t._v(" "),s("h3",{attrs:{id:"onready"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onready","aria-hidden":"true"}},[t._v("#")]),t._v(" onReady")]),t._v(" "),s("p",[t._v("原生onReady。")]),t._v(" "),s("h3",{attrs:{id:"formchange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#formchange","aria-hidden":"true"}},[t._v("#")]),t._v(" formChange")]),t._v(" "),s("p",[t._v("表单内任意基础组件的value发生变化时触发，参数为对应基础组件的value。此函数会在页面onUnload触发时销毁。")]),t._v(" "),s("h3",{attrs:{id:"saveform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saveform","aria-hidden":"true"}},[t._v("#")]),t._v(" saveForm")]),t._v(" "),s("p",[t._v("保存方法，无特殊逻辑的保存行为，内部逻辑如下：")]),t._v(" "),s("ul",[s("li",[t._v("校验：根据组件内的validate判断，不通过则中断函数，并弹出提示，提示内容根据基础组件。")]),t._v(" "),s("li",[t._v("格式化提交数before据：生成一个对象，包含bizObj内的所有基础组件的value，value的key为组件定义时传入的key，value本身未作任何处理。子表的key为children。")]),t._v(" "),s("li",[t._v("触发钩子函数beforeSubmit（如果存在）。")]),t._v(" "),s("li",[t._v("和原始的表单数据合并（如果存在）。")]),t._v(" "),s("li",[t._v("发请求。")])]),t._v(" "),s("h3",{attrs:{id:"beforesubmit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforesubmit","aria-hidden":"true"}},[t._v("#")]),t._v(" beforeSubmit")]),t._v(" "),s("p",[t._v("提交前钩子函数，参数为saveForm方法的第二步生成的对象，该函数必须返回Promise对象。")]),t._v(" "),s("h3",{attrs:{id:"handlepost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handlepost","aria-hidden":"true"}},[t._v("#")]),t._v(" handlePost")]),t._v(" "),s("p",[t._v("类似saveForm，不同点在于增加了多个可以配置的点，接收一个config对象，可配置属性如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("默认行为")]),t._v(" "),s("th",[t._v("可选值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("autoCheck")]),t._v(" "),s("td",[t._v("是否自动校验")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[s("code",[t._v("boolean")])])]),t._v(" "),s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("提交地址")]),t._v(" "),s("td",[t._v("无")]),t._v(" "),s("td",[s("code",[t._v("string")])])]),t._v(" "),s("tr",[s("td",[t._v("successText")]),t._v(" "),s("td",[t._v("成功的提示")]),t._v(" "),s("td",[t._v("保存成功")]),t._v(" "),s("td",[s("code",[t._v("string")])])]),t._v(" "),s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",[t._v("成功后是否刷新列表")]),t._v(" "),s("td",[t._v("刷新")]),t._v(" "),s("td",[s("code",[t._v("boolean")])])]),t._v(" "),s("tr",[s("td",[t._v("return")]),t._v(" "),s("td",[t._v("成功后是否返回")]),t._v(" "),s("td",[t._v("返回")]),t._v(" "),s("td",[s("code",[t._v("boolean")])])]),t._v(" "),s("tr",[s("td",[t._v("failText")]),t._v(" "),s("td",[t._v("失败的提示")]),t._v(" "),s("td",[t._v("保存失败")]),t._v(" "),s("td",[s("code",[t._v("string")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);