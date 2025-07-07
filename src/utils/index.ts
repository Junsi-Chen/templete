// index.ts 放一些基础的，如果需要大的工具模块，就需要像Tips一样，单独放一个
/**
 * 获取当前页面路径
 * @returns 当前页面路径
 */
export function getCurrentPath() {
  const routeStore = useRouteStore();
  return routeStore.currentRoute || {};
}
