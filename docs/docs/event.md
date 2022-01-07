# event
## 页面卸载事件
页面卸载时会触发`beforeunload`事件,并由此采集发送页面卸载信息给后台

| 属性名称      | 值                                              | 说明         |
| ------------- | ----------------------------------------------- | ------------ |
| eventId       | 根据时间戳计算得来的字符 (每次卸载事件都不相同) | 事件ID       |
| eventType     | dwell                                           | 事件类型     |
| url           |                                                 | 当前页面URL  |
| referer       |                                                 | 上级页面URL  |
| entryTime     |                                                 | 加载完成时间 |
| triggerTime   |                                                 | 卸载时间     |
| millisecond   |                                                 | 页面停留时间 |
| operateAction | navigate / reload / back_forward / reserved     | 页面加载来源 |

## 点击事件
插件监听页面`click`事件,然后根据一系列规则判断是否采集事件以及获取该事件所需要的参数

| 属性名称    | 值                                                                           | 说明                     |
| ----------- | ---------------------------------------------------------------------------- | ------------------------ |
| eventId     | 详见下面的采集规则                                                           | 事件ID                   |
| eventType   | click                                                                        | 事件类型                 |
| title       | 详见下面的采集规则                                                           | 事件名                   |
| params      | 详见下面的采集规则                                                           | 事件参数                 |
| url         |                                                                              | 当前页面URL              |
| triggerTime |                                                                              | 点击时间                 |
| x           | e.target.getBoundingClientRect().left +  document.documentElement.scrollLeft | 被点击元素与屏幕左边距离 |
| y           | e.target.getBoundingClientRect().top +  document.documentElement.scrollTop   | 被点击元素与屏幕上边距离 |


### DOM元素标记
:rocket::rocket:插件会根据`DOM元素`上一些属性来获取需要采集该元素的事件,以及采集该元素事件时应该传递哪些参数

| 属性名称              | 说明                                                                                |
| --------------------- | ----------------------------------------------------------------------------------- |
| data-warden-container | 该元素作为采集容器,内部的需要采集的元素上如果没有这些属性会使用容器上的属性作为填充 |
| data-warden-event-id  | 元素上标记事件的id                                                                  |
| data-warden-title     | 元素上标记事件的title,**也可以使用原生的title属性**,但是此时鼠标悬浮会有提示        |
| data-warden-*         | 其他的属性都会被当作参数,例如 data-warden-name="a" 会被收集为{ name: 'a' }          |

#### data-warden-container 属性详细介绍
元素拥有data-warden-container则视作是容器元素,内部元素触发的事件时,
如果触发事件的元素上没有埋点属性修饰那就认为这个事件是由容器节点触发的,
容器节点取代触发事件的子元素节点作为target,标题从容器上获取,内容依旧从真实触发事件的子元素上获取
``` html
<!-- 容器元素,内部的元素如果本身没有标记,父级有data-warden-container属性，则视作是由容器元素触发的事件 -->
<!-- 点击超链接或是图片时,按触发元素是父级div元素来处理 -->
<div data-warden-container data-warden-event-id="点击课程">
  <img src="" alt="" onClick="() => location.href = url" />
  <a href={url}>课程1</a>      
</div>
```

#### 事件标识(eventId字段)
data-warden-event-id, title<br>
事件的标题代表了埋点事件的ID,不用的事件埋点用不同的标题区分,是作为埋点事件的"身份"字段<br>

取值优先级:
1. 存在data-warden-event-id属性
2. 存在title属性
3. 如果被容器包裹,则target为容器节点,再按1、2的优先级读取一次标题值;如果1、2取不到值,则去读取data-warden-container属性值,如果值不为true,是个字符串,则返回data-warden-containr的属性值,否则返回标签名称
4. 如果没有被容器包裹,则title返回元素标签名称

##### 事件标识(title字段)
点击事件的内容按以下规则采集
![埋点事件采集获取title字段流程图](https://gitee.com/M-cheng-web/map-storage/raw/master/design-img/%E5%9F%8B%E7%82%B9%E4%BA%8B%E4%BB%B6%E9%87%87%E9%9B%86%E8%8E%B7%E5%8F%96title%E5%AD%97%E6%AE%B5%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
