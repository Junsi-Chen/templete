// store 的出口

import type { PiniaPluginContext } from "pinia";

function persist({ store }: PiniaPluginContext, excludedIds: string[]) {
  // 检查当前store的id是否在排除列表中
  const isExcluded = excludedIds.includes(store.$id);

  // 如果当前store的id在排除列表中，则不进行持久化
  if (isExcluded) {
    return;
  }

  // 暂存State
  let persistState = CommonUtil.deepClone(store.$state);
  // 从缓存中读取
  const storageState = uni.getStorageSync(store.$id);
  if (storageState) {
    persistState = storageState;
  }
  store.$state = persistState;
  store.$subscribe(() => {
    // 在存储变化的时候将store缓存
    uni.setStorageSync(store.$id, CommonUtil.deepClone(store.$state));
  });
}

export function persistPlugin(context: PiniaPluginContext) {
  // 调用persist函数，并传入排除列表
  persist(context, ["temp"]);
}
