# 在 JS 中使用

## 方式一: 通过 script 标签引入
**CDN链接** [https://cdn.jsdelivr.net/npm/web-tracing](https://cdn.jsdelivr.net/npm/web-tracing)

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <script src="https://cdn.jsdelivr.net/npm/web-tracing"></script>
  <script>
    webtracing.init({
      requestUrl: 'http://172.15.224.10:33199/trackweb/tra',
      appName: 'chengxh',
      event: true,
      performance: true,
      pv: true,
      error: true,
    })
  </script>
  <body>
  </body>
</html>
```

## 方式二: 通过 import 引入

<font size=5>安装</font>

``` json
# npm 安装
npm i web-tracing@latest

# 或者 yarn 安装
yarn add web-tracing@latest
```

<font size=5>使用</font>

``` js
const webtracing = require('web-tracing')
// 或者: import webtracing from 'web-tracing'

webtracing.init({
  requestUrl: 'http://172.15.224.10:33199/trackweb/tra',
  appName: 'chengxh',
  event: true,
  performance: true,
  pv: true,
  error: true,
})

// 主动收集
webtracing.traceError(...)
webtracing.tracePerformance(...)
webtracing.traceCustomEvent(...)
webtracing.tracePageView(...)
```