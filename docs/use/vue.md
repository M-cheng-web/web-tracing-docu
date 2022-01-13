# 在 Vue 中使用
> 目前只支持vue2,如果想用在vue3中参考js的使用方法放在 public->index.html 中

<font size=4>1. 安装插件</font>

``` json
# npm 安装
npm i web-tracing@latest

# 或者 yarn 安装
yarn add web-tracing@latest
```

<font size=4>2. 在 main.js 引入插件</font>

``` js
import tracing from 'web-tracing'
Vue.use(tracing)
Vue.use(trace, {
  requestUrl: 'http://172.15.224.10:33199/trackweb/tra',
  appName: 'chengxh',
  event: true,
  performance: true,
  pv: true,
  error: true,
})
```

<font size=4>3. 在项目中使用</font>

主动收集

``` js
this._trace.traceError(...)
this._trace.tracePerformance(...)
this._trace.traceCustomEvent(...)
this._trace.tracePageView(...)
```

html元素增加属性自动收集

``` html
<template>
  <div
    data-warden-title="xxx"
    data-warden-bigTitle="bigTitle"
  >
    <div
      data-warden-test="test"
      data-warden-title="titletitle"
      data-warden-bing="bing"
      data-warden-event-id="ddd"
    >
      <div class="asd">111</div>
    </div>
    <button data-warden-container value="xxxxxx" ref="bun">222</button>
  </div>
</template>
```