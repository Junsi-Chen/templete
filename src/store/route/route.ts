// stores/route.ts
import { defineStore } from "pinia";

// route 类型
interface RouteType {
  /** 路由路径（带完整页面路径） */
  path: string | undefined;

  /** 路由别名（如果有） */
  aliasPath?: string;

  /** 路由名称 */
  name: string | undefined;

  /** 路由参数 */
  query?: any;

  /** 路由参数 */
  params?: any;

  /** 路由元信息 */
  meta?: {
    /** 页面标题 */
    title?: string;
    /** 其他自定义元数据 */
    [key: string]: any;
  };
}

export const useRouteStore = defineStore("route", {
  state: () => ({
    currentRoute: {
      path: "",
      name: "",
      query: {},
      params:{},
      meta: {},
    } as RouteType,
  }),
  actions: {
    // 外部调用此方法更新路由状态
    updateRoute(route: RouteType) {
      this.currentRoute = { ...route };
    },
  },
});
