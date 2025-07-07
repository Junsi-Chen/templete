<script setup lang="ts">
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
/* 每个页面公共css */
@import url("~@/static/style/main.css");
/* 新的  不生效 */
@import "static/icon/iconfont.css";
</style>
