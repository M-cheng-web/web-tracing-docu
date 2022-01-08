(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{564:function(v,_,e){"use strict";e.r(_);var a=e(12),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"基础说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础说明"}},[v._v("#")]),v._v(" 基础说明")]),v._v(" "),e("blockquote",[e("p",[v._v("建议第一次用本插件的同学按照此基础说明的步骤来熟悉插件~")])]),v._v(" "),e("h2",{attrs:{id:"插件采集规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件采集规则"}},[v._v("#")]),v._v(" 插件采集规则")]),v._v(" "),e("h3",{attrs:{id:"采集方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采集方式"}},[v._v("#")]),v._v(" 采集方式")]),v._v(" "),e("ul",[e("li",[v._v("自动采集: 自动获取 事件 & 性能 & 页面跳转 等信息")]),v._v(" "),e("li",[v._v("手动采集: 使用者手动调用"),e("strong",[v._v("插件内置方法")]),v._v("触发采集")])]),v._v(" "),e("h3",{attrs:{id:"发送后台地址配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送后台地址配置"}},[v._v("#")]),v._v(" 发送后台地址配置")]),v._v(" "),e("p",[v._v("发送后台地址配置: 通过"),e("code",[v._v("init")]),v._v("初始化配置地址")]),v._v(" "),e("h3",{attrs:{id:"发送数据原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送数据原理"}},[v._v("#")]),v._v(" 发送数据原理")]),v._v(" "),e("p",[v._v("指的是本插件将采集到的数据发送给指定后台的原理")]),v._v(" "),e("ul",[e("li",[v._v("navigator.sendBeacon")]),v._v(" "),e("li",[v._v("new Image()")])]),v._v(" "),e("p",[v._v("插件会使用以上两种方法进行数据发送,优先使用"),e("code",[v._v("navigator.sendBeacon")]),v._v("方式")]),v._v(" "),e("h3",{attrs:{id:"发送间隔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送间隔"}},[v._v("#")]),v._v(" 发送间隔")]),v._v(" "),e("p",[v._v("这里需要了解两个概念")]),v._v(" "),e("ul",[e("li",[v._v("最大缓存数 5")]),v._v(" "),e("li",[v._v("延迟时长 5s")])]),v._v(" "),e("p",[v._v("最大缓存数: 在触发一次采集后并不会马上发送采集信息给后台,而是会缓存起来等达到最大缓存数才会将这些采集到的信息\n拼接到一起(数组)的形式发生给后台")]),v._v(" "),e("p",[v._v("延迟时长: 如果在触发一次后迟迟没有达到最大缓存数,达到最大延迟时长后也会将这一次的采集结果发送给后台"),e("br"),v._v(" "),e("strong",[v._v("另:如果是每间隔3s触发了一次采集,那么每一次触发都会清除这个延迟时长,直到达到了最大缓存数或是在最后一次采集后5s没有最新采集")])]),v._v(" "),e("blockquote",[e("p",[v._v("这两个常量暂时是不能配置的,放在TODO中有需要再做~")])]),v._v(" "),e("h2",{attrs:{id:"标识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标识"}},[v._v("#")]),v._v(" 标识")]),v._v(" "),e("p",[v._v("为了最大程度标识用户以及细分业务,插件提供了以下几个属性")]),v._v(" "),e("ul",[e("li",[v._v("pageId (应用ID 自动生成)")]),v._v(" "),e("li",[v._v("sessionId (会话ID 自动生成)")]),v._v(" "),e("li",[v._v("deviceId (设备ID 自动生成)")]),v._v(" "),e("li",[v._v("appName (应用Name 使用者初始化设置)")]),v._v(" "),e("li",[v._v("appCode (应用Code 使用者初始化设置)")]),v._v(" "),e("li",[v._v("customerId (类型ID 使用者调用方法设置)")]),v._v(" "),e("li",[v._v("userUuid (用户ID 使用者调用方法设置)")])]),v._v(" "),e("p",[e("code",[v._v("pageId sessionId deviceId")]),v._v(" 的生成规则是一样的,最终会各自生成类似于这样的字符串"),e("br"),v._v(" "),e("code",[v._v("13488cb7-85a62e2a-917f1a1d943f5ae5")]),e("br"),v._v(" "),e("code",[v._v("s_13488cb7-85a6166f-8c296bb4a6089363")]),e("br"),v._v(" "),e("code",[v._v("t_13466167-991854d1-da9f0cf52c91fac4")])]),v._v(" "),e("p",[v._v("不同的是"),e("code",[v._v("pageId")]),v._v("在整个页面生命周期不变,只会在首次加载插件才会生成")]),v._v(" "),e("p",[e("code",[v._v("sessionId")]),v._v("会存入cookie,存活时长为30分钟,每次触发采集事件都会刷新这个ID\n"),e("code",[v._v("deviceId")]),v._v("也会存入cookie,不设置存活时长")]),v._v(" "),e("p",[e("code",[v._v("appName")]),v._v("以及"),e("code",[v._v("appCode")]),v._v("可以在"),e("code",[v._v("init")]),v._v("初始化时进行赋值")]),v._v(" "),e("p",[e("code",[v._v("customerId")]),v._v("以及"),e("code",[v._v("userUuid")]),v._v("有特有的方法对它们赋值")]),v._v(" "),e("blockquote",[e("p",[v._v("这些属性都会在发送给后台时带上")])])])}),[],!1,null,null,null);_.default=t.exports}}]);