# 背景

因为小程序不支持自定义指令，所以用了这个来代替自定义指令。

# 使用例子

```vue
<template>
  <view type="primary" data-tkname="按钮1的名字" @click="handleTest($event)">按钮</view>
</template>

<script setup lang="ts">
// 通过useTrack 获取 withTrack
const { withTrack } = useTrack();
// 需要埋点的按钮
const handleTest = withTrack((event: Event) => {
  console.log('这里是原有函数的逻辑');
});

</script>
```

# 注意事项

* useTrack 不需要引入，项目上下文已经自动引入了
* data-tkname  一定要写对
