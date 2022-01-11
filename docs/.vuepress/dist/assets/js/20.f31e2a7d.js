(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{573:function(t,v,_){"use strict";_.r(v);var e=_(12),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"内置方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内置方法"}},[t._v("#")]),t._v(" 内置方法")]),t._v(" "),_("p",[t._v("当遇到特殊场景需要手动触发采集时可以通过插件内置的方法来达到目的")]),t._v(" "),_("h2",{attrs:{id:"主动上报方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主动上报方法"}},[t._v("#")]),t._v(" 主动上报方法")]),t._v(" "),_("ul",[_("li",[t._v("traceError")]),t._v(" "),_("li",[t._v("tracePerformance")]),t._v(" "),_("li",[t._v("traceCustomEvent")]),t._v(" "),_("li",[t._v("tracePageView")])]),t._v(" "),_("blockquote",[_("p",[t._v("目前来说主动上报方法也要遵循最大缓存数和延迟时长的规则,还没有配置即刻触发")])]),t._v(" "),_("h3",{attrs:{id:"traceerror"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#traceerror"}},[t._v("#")]),t._v(" traceError")]),t._v(" "),_("p",[t._v("采集错误信息(调用此方法时发送给后台的 eventType 为 error, 这是固定的)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("eventId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("作为eventId发送给后台,定义为和业务确定好的字段")])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("作为errMessage发送给后台")])]),t._v(" "),_("tr",[_("td",[t._v("options")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("{}")]),t._v(" "),_("td",[t._v("对象内的值在解构一层后放在和eventId同级一起发给后台,作为额外参数")])])])]),t._v(" "),_("h3",{attrs:{id:"traceperformance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#traceperformance"}},[t._v("#")]),t._v(" tracePerformance")]),t._v(" "),_("p",[t._v("采集自定义性能数据(调用此方法时发送给后台的 eventType 为 performance, 这是固定的)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("eventId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("作为eventId发送给后台,定义为和业务确定好的字段")])]),t._v(" "),_("tr",[_("td",[t._v("options")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("{}")]),t._v(" "),_("td",[t._v("对象内的值在解构一层后放在和eventId同级一起发给后台,作为额外参数")])])])]),t._v(" "),_("h3",{attrs:{id:"tracecustomevent"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tracecustomevent"}},[t._v("#")]),t._v(" traceCustomEvent")]),t._v(" "),_("p",[t._v("自定义上报事件(调用此方法时发送给后台的 eventType 为 custom, 这是固定的)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("eventId")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("作为eventId发送给后台,定义为和业务确定好的字段")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("作为title发送给后台")])]),t._v(" "),_("tr",[_("td",[t._v("params")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("{}")]),t._v(" "),_("td",[t._v("作为params发送给后台")])])])]),t._v(" "),_("h3",{attrs:{id:"tracepageview"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tracepageview"}},[t._v("#")]),t._v(" tracePageView")]),t._v(" "),_("p",[t._v("触发一次页面路由采集(调用此方法时发送给后台的 eventType 为 custom, 这是固定的)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("option")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("{ url = window.location.href, referer = oldURL, actions = '', params }")]),t._v(" "),_("td",[t._v("url会作为url当前页面的意思传给后台"),_("br"),t._v("referer上级页面URL的意思传给后台"),_("br"),t._v("actions会作为为action给后台"),_("br"),t._v("params会作为额外参数传给后台(不限制类型)"),_("br"),_("strong",[t._v("注意:只会取option对象中这四个属性,多给也不用")])])])])]),t._v(" "),_("p",[t._v("option.actions表示加载来源,可选值有这些(非必须,主要看使用者和后台的约定)")]),t._v(" "),_("ul",[_("li",[t._v("navigate 网页通过点击链接,地址栏输入,表单提交,脚本操作等方式加载")]),t._v(" "),_("li",[t._v("reload 网页通过“重新加载”按钮或者location.reload()方法加载")]),t._v(" "),_("li",[t._v("back_forward 网页通过“前进”或“后退”按钮加载")]),t._v(" "),_("li",[t._v("reserved 任何其他来源的加载")])]),t._v(" "),_("h2",{attrs:{id:"其他方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),_("p",[t._v("调用以下方法会在触发任意采集并发送给后台时附带上设置的参数")]),t._v(" "),_("ul",[_("li",[t._v("setCustomerId (设置类型ID)")]),t._v(" "),_("li",[t._v("setUserUuid (设置用户ID)")])]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("_trace"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCustomerId")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'customId'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n_trace"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserUuid")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uuid'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("blockquote",[_("p",[t._v("后续会新增由使用者来配置想要的参数名")])])])}),[],!1,null,null,null);v.default=a.exports}}]);