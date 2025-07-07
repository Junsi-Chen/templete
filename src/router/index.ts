import { createRouter } from "uni-mini-router";
// 导入pages.json
import pagesJson from "@/pages.json";
// 引入uni-parse-pages
import pagesJsonToRoutes from "uni-parse-pages";
// 白名单路由
import { whiteList } from "@/router/whiteList/whiteList";

// 生成路由表
const routes = pagesJsonToRoutes(pagesJson);
const router = createRouter({
  routes: [...routes], // 路由表信息
});

// beforeEach 进入页面之前 -- TODO
router.beforeEach((to, from, next) => {
  if (to.path) {
    // 白名单路由直接跳转
    if (whiteList.includes(to.path)) {
      next();
      return;
    }
    // 如果不是白名单，且没有token进入
    const authStore = useAuthStore();
    if (!authStore.getAuthorization?.accessToken) {
      next({
        path: "/pages/login/index",
      });
      return;
    }
    // 不是白名单，且有token，就放行
    next();
    return;
  }
  // 这里to.path 是undefined 跳404错误页面
  next({
    path: "/pages/error/404/index",
  });
});

// afterEach 进入页面之后 -- TODO
router.afterEach((to, from) => {
  // 保存当前激活的页面
  const routeStore = useRouteStore();
  routeStore.updateRoute({
    path: to.path,
    name: to.name,
    query: to.query,
    params: to.params,
    aliasPath: to.aliasPath,
    meta: (to as any).meta || {},
  });
});

export default router;
