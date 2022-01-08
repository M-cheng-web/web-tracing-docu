# http
采集所有的 ajax & axios & fetch 请求(因为是劫持了XMLHttpRequest.prototype.send方法,基于此实现的请求都会被有效采集)

触发事件时给后台的对象
| 属性名称       | 值                                    | 说明                          |
| -------------- | ------------------------------------- | ----------------------------- |
| eventId        | server                                | 事件ID                        |
| eventType      | 请求错误时error, 请求正确时performance | 事件类型                      |
| src            |                                       | 请求地址                      |
| errMessage     |                                       | 请求错误信息                  |
| responseStatus |                                       | 请求返回代码                  |
| duration       |                                       | 请求消耗时间                  |
| sendTime       |                                       | 发送时间                      |
| triggerTime    |                                       | 事件发生时间                  |
| params         |                                       | 请求的参数 (只有POST请求会带) |
| url            |                                       | 页面地址                      |
| type           |                                       | 大类type,参考`数据结构`       |