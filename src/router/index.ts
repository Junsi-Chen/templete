import { createRouter } from "uni-mini-router";
// 导入pages.json
import pagesJson from "@/pages.json";
// 引入uni-parse-pages
import pagesJsonToRoutes from "uni-parse-pages";

// 生成路由表
const routes = pagesJsonToRoutes(pagesJson);
const router = createRouter({
  routes: [...routes], // 路由表信息
});

// beforeEach 进入页面之前 -- TODO
router.beforeEach((to, from, next) => {
  // next入参 false 以取消导航
  next();
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
