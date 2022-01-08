(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{573:function(t,v,_){"use strict";_.r(v);var d=_(12),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"performance"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" performance")]),t._v(" "),_("p",[t._v("自动采集基础的性能数据")]),t._v(" "),_("ul",[_("li",[t._v("DOM加载")]),t._v(" "),_("li",[t._v("资源加载")])]),t._v(" "),_("h2",{attrs:{id:"数据来源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据来源"}},[t._v("#")]),t._v(" 数据来源")]),t._v(" "),_("p",[t._v("依赖于"),_("code",[t._v("performance.getEntriesByType('navigation')[0]")]),t._v("或者"),_("code",[t._v("performance.timing")]),t._v("的数据(nt2Timing优先)")]),t._v(" "),_("h2",{attrs:{id:"发送格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送格式"}},[t._v("#")]),t._v(" 发送格式")]),t._v(" "),_("p",[t._v("t = nt2Timing || performance.getEntriesByType('navigation')[0]")]),t._v(" "),_("h3",{attrs:{id:"首次页面性能数据对象格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首次页面性能数据对象格式"}},[t._v("#")]),t._v(" 首次页面性能数据对象格式")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名称")]),t._v(" "),_("th",[t._v("值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("eventId")]),t._v(" "),_("td",[t._v("page")]),t._v(" "),_("td",[t._v("事件ID")])]),t._v(" "),_("tr",[_("td",[t._v("eventType")]),t._v(" "),_("td",[t._v("performance")]),t._v(" "),_("td",[t._v("事件类型")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("pagePerformance")]),t._v(" "),_("td",[t._v("大类type,参考"),_("code",[t._v("数据结构")])])]),t._v(" "),_("tr",[_("td",[t._v("appcache")]),t._v(" "),_("td",[t._v("t.domainLookupStart - t.fetchStart")]),t._v(" "),_("td",[t._v("dns缓存时间")])]),t._v(" "),_("tr",[_("td",[t._v("dom")]),t._v(" "),_("td",[t._v("t.domInteractive - t.responseEnd")]),t._v(" "),_("td",[t._v("dom解析耗时")])]),t._v(" "),_("tr",[_("td",[t._v("dns")]),t._v(" "),_("td",[t._v("t.domainLookupEnd - t.domainLookupStart")]),t._v(" "),_("td",[t._v("dns查询耗时")])]),t._v(" "),_("tr",[_("td",[t._v("firstbyte")]),t._v(" "),_("td",[t._v("t.responseStart - t.domainLookupStart")]),t._v(" "),_("td",[t._v("首包时间")])]),t._v(" "),_("tr",[_("td",[t._v("fmp")]),t._v(" "),_("td",[t._v("t.fetchStart")]),t._v(" "),_("td",[t._v("首屏时间")])]),t._v(" "),_("tr",[_("td",[t._v("loadon")]),t._v(" "),_("td",[t._v("t.loadEventStart - t.fetchStart")]),t._v(" "),_("td",[t._v("页面完全加载时间")])]),t._v(" "),_("tr",[_("td",[t._v("ready")]),t._v(" "),_("td",[t._v("t.domContentLoadedEventEnd - t.fetchStart")]),t._v(" "),_("td",[t._v("HTML加载完成时间")])]),t._v(" "),_("tr",[_("td",[t._v("res")]),t._v(" "),_("td",[t._v("t.loadEventStart - t.domContentLoadedEventEnd")]),t._v(" "),_("td",[t._v("同步资源加载耗时")])]),t._v(" "),_("tr",[_("td",[t._v("sendTime")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("发送时间")])]),t._v(" "),_("tr",[_("td",[t._v("ssllink")]),t._v(" "),_("td",[t._v("t.connectEnd - t.secureConnectionStart")]),t._v(" "),_("td",[t._v("SSL安全连接耗时")])]),t._v(" "),_("tr",[_("td",[t._v("tcp")]),t._v(" "),_("td",[t._v("t.connectEnd - t.connectStart")]),t._v(" "),_("td",[t._v("tcp连接耗时")])]),t._v(" "),_("tr",[_("td",[t._v("trans")]),t._v(" "),_("td",[t._v("t.responseEnd - t.responseStart")]),t._v(" "),_("td",[t._v("内容传输耗时")])]),t._v(" "),_("tr",[_("td",[t._v("ttfb")]),t._v(" "),_("td",[t._v("t.responseStart - t.requestStart")]),t._v(" "),_("td",[t._v("请求响应耗时")])]),t._v(" "),_("tr",[_("td",[t._v("tti")]),t._v(" "),_("td",[t._v("t.domInteractive - t.fetchStart")]),t._v(" "),_("td",[t._v("首次可交互时间")])]),t._v(" "),_("tr",[_("td",[t._v("redirect")]),t._v(" "),_("td",[t._v("t.redirectEnd - t.redirectStart")]),t._v(" "),_("td",[t._v("重定向时间")])]),t._v(" "),_("tr",[_("td",[t._v("unloadTime")]),t._v(" "),_("td",[t._v("t.unloadEventEnd - t.unloadEventStart")]),t._v(" "),_("td",[t._v("上一个页面的卸载耗时")])]),t._v(" "),_("tr",[_("td",[t._v("url")]),t._v(" "),_("td",[t._v("window.location.href")]),t._v(" "),_("td",[t._v("当前页面地址")])])])]),t._v(" "),_("h3",{attrs:{id:"同步-异步资源加载时传给后台的对象格式-大部分依赖于performance-getentriesbytype-resource"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同步-异步资源加载时传给后台的对象格式-大部分依赖于performance-getentriesbytype-resource"}},[t._v("#")]),t._v(" 同步 & 异步资源加载时传给后台的对象格式(大部分依赖于"),_("code",[t._v("performance.getEntriesByType('resource')")]),t._v(")")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性名称")]),t._v(" "),_("th",[t._v("值")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("eventId")]),t._v(" "),_("td",[t._v("resource")]),t._v(" "),_("td",[t._v("事件ID")])]),t._v(" "),_("tr",[_("td",[t._v("eventType")]),t._v(" "),_("td",[t._v("performance")]),t._v(" "),_("td",[t._v("事件类型")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("resourcePerformance")]),t._v(" "),_("td",[t._v("大类type,参考"),_("code",[t._v("数据结构")])])]),t._v(" "),_("tr",[_("td",[t._v("src")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("资源具体url")])]),t._v(" "),_("tr",[_("td",[t._v("initiatorType")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("通过某种方式请求的资源,比如script,link")])]),t._v(" "),_("tr",[_("td",[t._v("transferSize")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("传输的数据包大小")])]),t._v(" "),_("tr",[_("td",[t._v("encodedBodySize")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("数据包压缩后大小")])]),t._v(" "),_("tr",[_("td",[t._v("decodedBodySize")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("数据包解压后大小")])]),t._v(" "),_("tr",[_("td",[t._v("duration")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("加载具体时长")])]),t._v(" "),_("tr",[_("td",[t._v("redirectStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("重定向开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("redirectEnd")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("重定向结束时间")])]),t._v(" "),_("tr",[_("td",[t._v("startTime")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("开始时间")])]),t._v(" "),_("tr",[_("td",[t._v("fetchStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("开始发起请求时间")])]),t._v(" "),_("tr",[_("td",[t._v("domainLookupStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("DNS开始解析时间")])]),t._v(" "),_("tr",[_("td",[t._v("domainLookupEnd")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("DNS结束解析时间")])]),t._v(" "),_("tr",[_("td",[t._v("connectStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("开始建立连接时间")])]),t._v(" "),_("tr",[_("td",[t._v("connectEnd")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("连接建立完成时间")])]),t._v(" "),_("tr",[_("td",[t._v("requestStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("开始发送数据包时间")])]),t._v(" "),_("tr",[_("td",[t._v("responseStart")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("开始接收数据包时间")])]),t._v(" "),_("tr",[_("td",[t._v("responseEnd")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("数据包接收完成时间")])]),t._v(" "),_("tr",[_("td",[t._v("triggerTime")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("事件触发时间")])]),t._v(" "),_("tr",[_("td",[t._v("url")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("当前页面地址")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);