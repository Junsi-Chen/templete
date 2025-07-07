/// <reference types='@dcloudio/types' />
import 'vue'

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance;

  interface ComponentCustomOptions extends Hooks {

  }
}

// 声明 Vite 环境变量
interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;          // 环境标识（development/production）
  readonly VITE_BASE_API: string;         // 接口基础地址
  readonly VITE_APP_NAME: string;         // 应用名称
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}