# 在 Vue 中使用

> 在main.js中引入时就需要初始化插件,与init的效果,参数一致

## vue2引入 & 使用

<font size=4>1. 安装插件</font>

``` json
# npm 安装
npm i @web-tracing/vue@latest

# 或者 yarn 安装
yarn add @web-tracing/vue@latest
```

<font size=4>2. 在 main.js 引入插件,初始化</font>

``` js
import tracing from 'web-tracing'
Vue.use(tracing, {
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
this.$trace.traceError(...)
this.$trace.tracePerformance(...)
this.$trace.traceCustomEvent(...)
this.$trace.tracePageView(...)
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

## vue3引入 & 使用

<font size=4>1. 安装插件</font>

``` json
# npm 安装
npm i @web-tracing/vue@latest

# 或者 yarn 安装
yarn add @web-tracing/vue@latest
```

<font size=4>2. 在 main.js 引入插件,初始化</font>

``` js
import tracing from 'web-tracing'
createApp(App).use(tracing, {
  requestUrl: 'http://172.15.224.10:33199/trackweb/tra',
  appName: 'chengxh',
  event: true,
  performance: true,
  pv: true,
  error: true,
}).mount('#app')
```

<font size=4>3. 在项目中使用</font>

主动收集

``` js
import { getCurrentInstance } from 'vue'

const internalInstance = getCurrentInstance()
const trace = internalInstance.appContext.config.globalProperties.$trace

trace.traceError(...)
trace.tracePerformance(...)
trace.traceCustomEvent(...)
trace.tracePageView(...)
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