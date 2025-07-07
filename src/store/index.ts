import { persistPlugin } from "@/store/plugins/persist";
// 创建pinia
const pinia = createPinia();
// 使用持久化插件
pinia.use(persistPlugin);
// 导出
export default pinia;
