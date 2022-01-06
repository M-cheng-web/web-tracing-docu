# 基础说明


| 属性名称              | 说明                                                                                |
| --------------------- | ----------------------------------------------------------------------------------- |
| data-warden-container | 该元素作为采集容器,内部的需要采集的元素上如果没有这些属性会使用容器上的属性最为填充 |
| data-warden-event-id  | 元素上标记事件的id                                                                  |
| data-warden-title     | 元素上标记事件的title,也可以使用原生的title属性,但是此时鼠标悬浮会有提示            |
| data-warden-*         | 其他的属性都会被当作参数,例如 data-warden-name="a"会被收集为{ name: 'a' }           |



## 采集的数据结构
事件类型 - eventType
+ pv
+ error
+ performance
+ click
+ dwell

事件数据结构 - Scheme

所有的埋点(pv、error、performance等)都是一种`事件`,这些事件有不同的类型,**不同类型下的埋点数据结构有一些差异**,下面整理各种类型的埋点应该要有哪些字段






