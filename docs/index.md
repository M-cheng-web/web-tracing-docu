

#### setCustomerId
设置customerId,后续采集中会携带这一参数
``` js
_trace.setCustomerId('customId');
```

#### setUserUuid
设置userUuid,后续采集中会携带这一参数
``` js
_trace.setUserUuid('uuid');
```

#### tracePageView
触发一次页面采集
``` js
_trace.tracePageView({
    url: '',
    referer: '',
    action: '',
    title: '',
    params: {},
});
```

#### tracePerformance
采集自定义性能数据
``` js
_trace.tracePerformance({
    eventId: '性能类型名称',
    options: {},
});
```

#### traceError
记录错误消息
``` js
_trace.traceError('错误类型名称', '错误消息', {
    // 上报参数
    params: {},
    // 可其他自定义属性
});
```

#### traceEvent
自定义上报事件
``` js
_trace.traceEvent('事件ID', '事件标题', {
    // 事件参数
});
```


### 埋点自动分类采集

#### 异常采集
页面错误自动收集,可以设置相同错误重复发送的阈值,达到阈值不再上报,可以规避一些循环错误无限上报
需要记录所有已经发生的错误,错误重复发生的次数<br>
相同的错误: 错误类型一致,报错信息一致(例如: 同一个文件位置、同一个接口和入参)<br>
异常还包括: 服务器请求异常、资源加载异常,服务端异常由http请求采集协助收集

#### 性能采集
自动采集基础的性能数据
+ DOM加载
+ 资源加载
+ 请求RT - 由http请求采集协助

#### 请求采集
SDK拦截了以下两种请求,覆盖了axios,ajax,fetch
+ 拦截XMLHttpRequest.send请求
+ 拦截fetch请求

#### 路由pv采集
在单页应用中,页面的切换不会重新加载页面,SDK不会重新执行,PV不会自动记录<br>
所以在单页应用中SDK需要去监听"路由"的变化,路由的变化主要有两种: Hash路由,History路由<br>
SDK需要监听这两种路由的变化

### 事件数据结构
**各个事件发送的数据结构以及解释**

#### 基础字段
| 字段名        | 类型   | 约束 | 备注                                                                          |
| ------------- | ------ | ---- | ----------------------------------------------------------------------------- |
| gatherAppCode | string | 非空 | 应用code                                                                      |
| gatherAppName | string | 非空 | 应用名称 ( xueyuan_APP / xueyuan_PC / xueyuan_mini )                          |
| appVersion    | string | 非空 | 应用版本                                                                      |
| sdkVersion    | string |      | 采集版本 ( sdk自动采集 )                                                      |
| gatherEnd     | string |      | 采集端类型,区分app原生/web端: mobile web                                      |
| deviceModel   | string |      | 设备型号名称,采集具体型号名字,例如:iPhoneX,MI8,web取不到填空                  |
| deviceType    | string |      | 设备类型.例如:mobile/pad/pc                                                   |
| deviceId      | string |      | 设备号 imei、mac、前端产生的uuid                                              |
| vendor        | string |      | 设备商: mi apple oneplus oppo vivo,web取不到填空                              |
| systemVersion | string |      | 操作系统和版本                                                                |
| platform      | string |      | 运行平台(ios/android/微信/小程序/微端/浏览器)                                 |
| browser       | string |      | 浏览器+版本                                                                   |
| screenWidth   | number |      | 设备屏幕宽度                                                                  |
| screenHeight  | number |      | 设备屏幕高度                                                                  |
| clientWidth   | number |      | 可视区域宽度,native不统计                                                     |
| clientHeight  | number |      | 可视区域高度,native不统计                                                     |
| sendTime      | number |      | 埋点发送的客户端时间戳 单位:ms                                                |
| pageId        | string |      | WEB单页应用打开时生成的ID,在应用内切换路由,ID不变,到新页面或是刷新时,重新生成 |
| sessionId     | string |      | 会话ID,没有交互时30分钟后重新创建sessionId                                    |
| ip            | string |      | 埋点服务器记录时补充                                                          |
| receiveTime   | number |      | 埋点服务器记录时补充,埋点在服务端接收到的时间戳 单位:ms                       |
| geo           | string |      | 埋点服务器记录时补充,地理位置经纬度( x / y )                                  |
| ua            | string |      | 埋点服务器记录时补充,从请求头中获取补充,userAgent                             |


#### pv
| 字段名        | 类型    | 约束 | 备注                                                                  |
| ------------- | ------- | ---- | --------------------------------------------------------------------- |
| eventType     | string  |      | pv(路由采集)                                                          |
| eventId       | string  |      | sdk自动产生,每次进入同一个页面,eventId保证相同 单页面应用保持不变     |
| url           | string  |      | 事件发生的URL，因为埋点数据缓存发送，SDK需要中url属性写入到每条记录中 |
| referer       | string  |      | 上游页面地址                                                          |
| action        | string  |      | navigate / reload / back_forward / reserved                           |
| params        | string  |      | 手动采集才有                                                          |
| time          | number  |      | 事件发生的客户端时间戳 单位: ms                                       |
| cookieEnabled | boolean |      | true/false,native不统计                                               |

#### dwell
| 字段名      | 类型   | 约束 | 备注                                                                |
| ----------- | ------ | ---- | ------------------------------------------------------------------- |
| eventType   | string |      | dwell(页面卸载事件)                                                 |
| eventId     | string |      | sdk自动产生,每次进入同一个页面,eventId保证相同 单页面应用保持不变   |
| url         | string |      | 事件发生的URL,因为埋点数据缓存发送,SDK需要中url属性写入到每条记录中 |
| referer     | string |      | 上游页面地址                                                        |
| action      | string |      | navigate / reload / back_forward / reserved                         |
| params      | string |      | 手动采集才有                                                        |
| triggerTime | number |      | 事件发生的客户端时间戳  单位: ms                                    |
| millisecond | string |      | 页面停留时长                                                        |

#### mix
| 字段名      | 类型   | 约束 | 备注                                                               |
| ----------- | ------ | ---- | ------------------------------------------------------------------ |
| eventType   | string | 非空 | mix(click、change、submit、scroll),多种事件集合                    |
| eventId     | string |      | click事件的唯一标识,如需采集,则web请看data-warden-event-id采集规则 |
| title       | string |      | 事件自动采集的内容                                                 |
| params      | string |      | 事件自定义参数JSON对象,比事件信息更结构化                          |
| path        | string |      | 事件发生的元素位置                                                 |
| x           | string |      | x坐标( app端暂时没有 )                                             |
| y           | string |      | y坐标( app端暂时没有 )                                             |
| href        | string |      | click - 如果是超链接,记录超链的href                                |
| url         | string |      | click事件发生时的页面url                                           |
| triggerTime | number |      | 事件发生的客户端时间戳  单位: ms                                   |

#### error
| 字段名         | 类型   | 约束 | 备注                                                                                                                      |
| -------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| eventType      | string | 非空 | error(错误收集)                                                                                                           |
| eventId        | string |      | server / code / resource  / biz - 服务器异常（4xx、5xx的非正常响应）/ 代码异常 / 静态资源404 / 业务异常（主动上报的异常） |
| src            | string |      | 源码路径,资源路径,请求路径                                                                                                |
| triggerTime    | number |      | 事件发生的客户端时间戳  单位: ms                                                                                          |
| method         | string |      | 如果是请求的话,请求类型post/get                                                                                           |
| responseStatus | string |      | 如果是请求的话,请求状态码是啥                                                                                             |
| params         | string |      | 自定义的参数数据                                                                                                          |
| errMessage     | string |      | 错误消息                                                                                                                  |
| errName        | string |      | ReferenceError / 404 Not Found 错误类型名                                                                                 |
| errStack       | string |      | 异常堆栈                                                                                                                  |
| line           | number |      | 行号                                                                                                                      |
| col            | number |      | 列号                                                                                                                      |
| url            | string |      | 事件发生的URL,因为埋点数据缓存发送,SDK需要中url属性写入到每条记录中                                                       |

#### performance
| 字段名        | 描述                                       | 类型   | 计算方式                                  | 备注                                                                                                                               |
| ------------- | ------------------------------------------ | ------ | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| eventType     | performance                                | string |                                           | performance                                                                                                                        |
| eventId       | page-performance                           | string |                                           | page                                                                                                                               |
| navgationType |                                            | string |                                           | 打开方式'reload'                                                                                                                   |
| fmp           | First Meaningful Paint(首屏时间)           | number | 渲染节点增量最大的时间点                  | 这里我们理解FMP为渲染有效屏幕的时间,我们用节点渲染增量最大的点作为首屏时间,已经能适用于大部分渲染场景,后续引入节点权重算法精确此值 |
| fpt           | First Paint Time，首次渲染时间（白屏时间） | number | responseEnd - fetchStart                  | 从请求开始到浏览器开始解析第一批HTML文档字节的时间差                                                                               |
| tti           | Time to Interact，首次可交互时间           | number | domInteractive - fetchStart               | 浏览器完成所有HTML解析并且完成DOM构建,此时浏览器开始加载资源                                                                       |
| ready         | HTML加载完成时间， 即DOM Ready时间         | number | domContentLoadEventEnd - fetchStart       |                                                                                                                                    |
| load          | 页面完全加载时间                           | number | loadEventStart - fetchStart               | load = 首次渲染时间 + DOM解析耗时 + 同步JS执行 + 资源加载耗时                                                                      |
| firstbyte     | 首包时间                                   | number | responseStart - domainLookupStart         |                                                                                                                                    |
| dns           | dns查询耗时                                | number | domainLookupEnd - domainLookupStart       |                                                                                                                                    |
| tcp           | TCP连接耗时                                | number | connectEnd - connectStart                 |                                                                                                                                    |
| ttfb          | Time to First Byte（TTFB），请求响应耗时   | number | responseStart - requestStart              |                                                                                                                                    |
| trans         | 内容传输耗时                               | number | responseEnd - responseStart               |                                                                                                                                    |
| dom           | DOM解析耗时                                | number | domInteractive - responseEnd              |                                                                                                                                    |
| res           | 资源加载耗时                               | number | loadEventStart - domContentLoadedEventEnd | 页面中的同步加载资源                                                                                                               |
| ssl           | SSL安全连接耗时                            | number | connectEnd - secureConnectionStart        |                                                                                                                                    |
| url           | performance                                | string |                                           | 事件发生的URL,因为埋点数据缓存发送,SDK需要中url属性写入到每条记录中                                                                |

#### performance-server
| 字段名         | 类型   | 备注                                                                |
| -------------- | ------ | ------------------------------------------------------------------- |
| eventType      | string | performance                                                         |
| eventId        | string | server(请求)                                                        |
| src            | string | 请求地址,对应到performance的name                                    |
| method         | string | 'get'/'post'                                                        |
| duration       | number | 请求耗时                                                            |
| triggerTime    | number | 开始发送请求的时间,时间戳 13                                        |
| responseStatus | string | 返回状态                                                            |
| params         | object | 后端标识                                                            |
| url            | string | 事件发生的URL,因为埋点数据缓存发送,SDK需要中url属性写入到每条记录中 |

#### performance-resource
| 字段名            | 类型   | 备注                                                                               |
| ----------------- | ------ | ---------------------------------------------------------------------------------- |
| eventType         | string | performance                                                                        |
| eventId           | string | resource(资源)                                                                     |
| src               | string | 资源具体url，对应到performance的name                                               |
| initiatorType     | string | 初始化性能条目的资源类型( script link css img first-paint first-contentful-paint ) |
| transferSize      | number | 传输的数据包大小                                                                   |
| encodedBodySize   | number | 数据包压缩后大小                                                                   |
| decodedBodySize   | number | 数据包解压后大小                                                                   |
| duration          | number | 加载具体时长,如果是0,是momery cache(responseEnd-startTime)                         |
| redirectStart     | number | 重定向开始                                                                         |
| redirectEnd       | number | 重定向结束                                                                         |
| startTime         | number | 开始时间                                                                           |
| fetchStart        | number | 开始发起请求                                                                       |
| domainLookupStart | number | DNS开始解析                                                                        |
| domainLookupEnd   | number | DNS结束解析                                                                        |
| connectStart      | number | 开始建立连接                                                                       |
| connectEnd        | number | 连接建立完成                                                                       |
| requestStart      | number | 开始发送数据包                                                                     |
| responseStart     | number | 开始接收数据包                                                                     |
| responseEnd       | number | 数据包接收完成                                                                     |
| triggerTime       | number | 开始发送请求的时间,时间戳 13                                                       |
| responseStatus    | string | 返回状态                                                                           |
| url               | string | 事件发生的URL,因为埋点数据缓存发送,SDK需要中url属性写入到每条记录中  native不统计  |
| isCompressed      | number | 是否开启了gzip压缩,0代表未开启,1代表开启,-1代表未知                                |

#### 自定义事件
| 字段名      | 类型   | 备注                                                       |
| ----------- | ------ | ---------------------------------------------------------- |
| eventType   | string | custom                                                     |
| eventId     | string | 业务方定义                                                 |
| action      | string | 定义触发的动作,click、scroll等等,由用户自定义指定,默认为空 |
| triggerTime | string | 触发时间                                                   |
| title       | string | 事件标题                                                   |
| params      | string | 事件参数                                                   |
| url         | string | 发生事件时的页面url                                        |










