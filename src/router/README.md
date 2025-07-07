## 使用示例

```vue
const router = useRouter() 
```

## Router实例方法

### push方法

▸ router.push(target:RouteLocationRaw): void

保留当前页面，跳转到应用内的某个页面，相当于使用 `uni.navigateTo(OBJECT)`。

### pushTab方法

▸ router.pushTab(target:RouteLocationRaw): void

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，相当于使用 `uni.switchTab(OBJECT)`。

### replace方法

▸ router.replace(target:RouteLocationRaw): void

关闭当前页面，跳转到应用内的某个页面，相当于使用 `uni.redirectTo(OBJECT)`。

### replaceAll方法

▸ router.replaceAll(target:RouteLocationRaw): void

关闭所有页面，打开到应用内的某个页面，相当于使用 `uni.reLaunch(OBJECT)`。

### back方法

▸ router.back(level?: number): void

关闭当前页面，返回上一页面或多级页面，相当于使用 `uni.navigateBack(OBJECT)`。
