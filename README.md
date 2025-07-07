# 安装依赖与运行

- npm i 安装依赖后：
- 通过 npm run dev:mp-weixin 运行微信小程序，用微信开发者工具打开 dist/dev/mp-weixin

# 系统说明

- 基于 Uniapp、Vue3、Vite、TypeScript 的公共框架

# 模块说明

```plaintext
petclient/
├── dist/                  # 构建输出目录
│   ├── dev/               │
│   │   └── mp-weixin/     # 微信小程序开发环境构建结果
│   └── prod/              # 生产环境构建结果
├── src/                   # 源代码目录
│   ├── components/        # 公共组件
│   ├── views/             # 页面视图
│   ├── store/             # Pinia 状态管理
│   ├── router/            # 路由管理
│   │   ├── index.ts       # 路由配置
│   │   └── README.md      # 路由说明
│   ├── utils/             # 工具函数
│   │   ├── Tips.ts        # 提示工具
│   │   └── 待定             # 待添加的工具
│   ├── assets/            # 静态资源
│   ├── styles/            # 全局样式
│   ├── net/               # 网络请求
│   │   └── request.ts     # 请求封装（根据H5）
│   ├── App.vue            # 根组件
│   ├── main.ts            # 入口文件
│   └── pages.json         # 页面配置
├── node_modules/          # 依赖模块
├── uniapp.d.ts            # Uniapp 类型定义
├── package.json           # 项目依赖和脚本配置
├── vite.config.ts         # Vite 配置文件
└── tsconfig.json          # TypeScript 配置文件
```

# 运行编辑器的差异（编辑器）

- Vscode

  * uni-helper
  * uni-highlight
  * Vue-Official
- HBuildX 直接编译即可

# 已完成的东西，后续会删除

- wot-design-uni的引入
- net/request的封装（根据H5）
- pinia的引入
- ts的支持
- z-paging的引入
- 环境变量的引入
- 全局样式的引入
- 全局方法工具的引入
  * Tips.ts
  * 待定
