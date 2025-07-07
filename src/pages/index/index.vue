<template>
  <view type="primary" data-tkname="按钮1的名字" @click="handleTest">按钮</view>
</template>

<script setup lang="ts">
import { post } from "@/net";
// 通过useTrack 获取 withTrack
// const { withTrack } = useTrack();

const authStore = useAuthStore();
// 需要埋点的按钮
const handleTest = async () => {
  const res = await post(
    "http://192.168.3.154:9999/api/auth/token/login",
    {
      loginType: "PASSWORD",
      account: "admin",
      password: "123456",
    }
  );
  // 能返回来就说明登录成功
  if (res.succeed) {
    // 保存到pinia
    authStore.saveAuthorization(res.data);
    // 提示成功
    Tips.toast("登录成功");
  }
};
</script>
