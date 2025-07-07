import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Uni(),
    // 页面使用到了就自动导入
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
        "pinia",
        "uni-app",
        {
          from: "wot-design-uni",
          imports: ["useToast", "useMessage", "useNotify", "CommonUtil"],
        },
        {
          from: "uni-mini-router",
          imports: ["createRouter", "useRouter", "useRoute"],
        },
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/store/**", "src/utils", "src/directives"],
      vueTemplate: true,
    }),
    // 处理自定义指令
  ],
  // 配置基础路径
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    // 允许外部访问，确保微信开发者工具能连接
    host: "0.0.0.0",
    // 启用热更新（默认启用，但明确设置更好）
    hmr: true,
    watch: {
      // 监听除 node_modules 外的文件
      ignored: ["!**/node_modules/**"],
    },
  },
  define: {
    // 全局常量，可直接在代码中使用
    UNI_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});
