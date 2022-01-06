# 待做

## API打点
``` js
wd.track({
    eventId: '',
    eventType: '',
});
 
wd.trackError(e);
 
// 记录开始和结束，筛选统计开始和结束之间的事件行为
wd.mark('业务标题');
// mark和clear中间的手动和自动的打点都会可以被统计到一个分组中
wd.track({});
wd.clear('业务标题');
```