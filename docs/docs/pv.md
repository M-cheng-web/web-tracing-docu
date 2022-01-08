# pv
插件可以采集页面跳转的数据,主要原理是劫持`history.pushState history.replaceState`,以及监听`popstate hashchange`这两个事件,其中`popstate`事件优先

触发事件时给后台的对象
| 属性名称    | 值                                          | 说明                    |
| ----------- | ------------------------------------------- | ----------------------- |
| eventId     | 根据时间戳计算得来的字符 (固定为pageId)     | 事件ID                  |
| eventType   | pv                                          | 事件类型                |
| url         |                                             | 当前页面URL             |
| referer     |                                             | 上级页面URL             |
| title       | document.title                              | 页面标题                |
| sendTime    |                                             | 发送时间                |
| triggerTime |                                             | 事件发生时间            |
| action      | navigate / reload / back_forward / reserved | 页面加载来源            |
| type        |                                             | 大类type,参考`数据结构` |

> 如果是hash路由,在init时要设置 hashtag = true, 否则浏览器前进后退事件会失效