# err
页面错误自动收集,原理是监听`error unhandledrejection`事件以及劫持`console.error`,采集三类错误
+ 资源加载错误,代码异常(error)
+ promise调用链异常(reject)
+ console.error异常

触发事件时给后台的对象
| 属性名称    | 值                                  | 说明                           |
| ----------- | ----------------------------------- | ------------------------------ |
| eventId     | code / HTML元素上发生异常则为元素名 | 事件ID                         |
| eventType   | error                               | 事件类型                       |
| url         |                                     | 当前页面URL                    |
| sendTime    |                                     | 发送时间                       |
| triggerTime |                                     | 事件发生时间                   |
| type        | error                               | 大类type,参考`数据结构`        |
| errMessage  |                                     | 错误信息                       |
| errStack    |                                     | 完整的错误信息                 |
| line        |                                     | 错误信息发生在第几行           |
| col         |                                     | 错误信息发生在第几列           |
| params      |                                     | 主动方法触发错误收集可以带参数 |

> 注意: vue中代码报错也会触发console.error,加上控制台本身也会输出,这就意味着会触发两次,这一点后续会优化