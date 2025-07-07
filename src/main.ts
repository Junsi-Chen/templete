// Vue相关
import { createSSRApp } from "vue";
import App from "./App.vue";

// pinia
import pinia from "@/store";

// router
import router from "./router";

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(router);
  return {
    app,
    pinia,
  };
}
