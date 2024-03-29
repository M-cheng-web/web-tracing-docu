# 介绍
<font size=7>web-tracing</font><br>
:boom::boom::boom::goat: 基于 JS 的 【行为埋点 & 性能采集 & 异常采集 & 请求采集 & 路由采集】 插件 :dash:

项目GitHub地址: [https://github.com/M-cheng-web/web-tracing](https://github.com/M-cheng-web/web-tracing)

<h1>
文档已翻新
<br/>
新文档地址：https://m-cheng-web.github.io/web-tracing/
</h1>

[https://m-cheng-web.github.io/web-tracing/](https://m-cheng-web.github.io/web-tracing/)

> 采集用户操作信息、环境信息以及性能信息,在一定延迟后统一发送请求给后端

## 行为埋点
如果你想获取到用户在页面的点击行为,一般来说有两种方案
1. 每次点击都请求接口告诉后台此次点击行为
2. 恰好点击按钮的行为本身就需要请求接口,所以这事看似交给后端做没毛病

可如果项目中有很多需要埋点的行为(无论它们是否本身就要请求后端),这样就会造成`不易管理`以及`频繁请求`的弊病,当埋点的行为需要增加参数或者是改变逻辑时前端会显得非常被动~

这个插件能帮助你收集项目中埋点的事件行为,当你需要单独触发行为埋点时也可以调用特有的方法来达到相同作用,可以通过`公共参数`以及`挂载html元素属性`的方式来**传递参数**

## 性能采集
收集 **性能 & 资源** 数据,主要有以下几点行为
1. 自动收集首次进入页面的性能数据(ps: 首屏时间,html加载完成时间,dns缓存时间...)
2. 收集项目引入的`同步`资源
3. 监听收集项目`异步`引入的资源

## 异常采集
采集三类错误
1. 资源加载错误,代码异常(error)
2. promise调用链异常(reject)
3. console.error异常

## 请求采集
采集项目中所有的 **ajax & axios & fetch** 请求(因为是劫持了`XMLHttpRequest.prototype.send`方法,基于此实现的请求都会被有效采集)

## 路由采集
采集页面跳转事件