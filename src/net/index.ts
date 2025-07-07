// 请求参数类型定义
interface RequestOptions {
  url: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  loading?: boolean;
  showMsg?: boolean;
  timeout?: number;
  needToken?: boolean;
}

// 错误类型
interface ErrorType {
  code: number;
  description: string;
  msg: string;
  requestId: string;
}

// 响应数据接口的定义
interface ResponseData {
  succeed: boolean;
  error: ErrorType;
  msg: string;
  data: any;
}

/**
 * 处理状态的方法
 * 100000 token非法
 * 100400 系统升级中
 * 403 没有权限
 * 417 请求头信息错误
 * 500 系统升级中,请稍后再试
 * 429 操作频繁,请稍后再试
 * 409 操作正在处理中,请稍后再试
 * 404 请求路径未找到
 */
function handleErrnoNotZero(errObj: ErrorType) {
  // 处理不同的错误码
  switch (errObj.code) {
    // 除了 token、没有权限，可能要单独处理，其他应该是提示一下，TODO
    case 100000:
      break;
    case 403:
      break;
    default:
      Tips.toast(`${errObj.msg}，${errObj.description}`);
      // 适当打印一下，错误id，以便调试
      console.error("本次的错误id为：", errObj.requestId);
      break;
  }
}

// 基础路径
const BASE_URL = import.meta.env.VITE_BASE_API || "";

// 真正的请求
function fetch(options: RequestOptions): Promise<ResponseData> {
  // 加载
  if (options.loading) {
    uni.showLoading({
      title: "加载中",
      mask: true,
    });
  }

  // 1. 请求路径
  // let requestUrl = BASE_URL + options.url;

  let requestUrl = options.url;

  // 2.在URL中添加Authorization（如果有的话）
  if (uni.getStorageSync("Authorization")) {
    requestUrl = `${requestUrl}?Authorization=${uni.getStorageSync(
      "Authorization"
    )}`;
  }

  // 创建请求的Promise
  return new Promise((resolve, reject) => {
    uni.request({
      // 默认配置
      url: requestUrl,
      data: {
        ...options.data,
      },
      timeout: options.timeout || 60000,
      header: {
        // 类型
        "Content-Type": "application/json;charset=UTF-8",
        // 请求端 CLIENT || ADMIN
        "app-client": "ADMIN",
        // 平台
        "app-platform": "WX_MA",
        // 版本
        "app-version": uni.getAppBaseInfo().appVersion + "",
        // 手机系统
        "app-system": uni.getSystemInfoSync().system + "",
        // 令牌
        Authorization: uni.getStorageSync("Authorization") || "",
      },
      method: options.method || "GET",

      // 成功
      success: (res: any) => {
        // 隐藏加载
        if (options.loading) {
          uni.hideLoading();
        }
        // 处理响应数据
        const rData = res.data as ResponseData;

        // 请求失败
        if (!rData.succeed && rData.error.code != 0) {
          if (options.showMsg) {
            // 处理失败的情况
            handleErrnoNotZero({
              code: rData.error.code,
              description: rData.error.description,
              requestId: rData.error.requestId,
              msg: rData.msg,
            });
          }
        }
        // 成功就返回数据
        resolve(rData);
      },

      // 失败
      fail: (err) => {
        if (options.loading) {
          uni.hideLoading();
        }
        if (options.showMsg) {
          Tips.toast("网络连接超时,请检查网络", 3000);
        }
        reject(err);
      },
    });
  });
}

/**
 * POST 请求
 */
export function post(
  url: string,
  params: any,
  loading = true,
  needToken = true,
  showMsg = true
): Promise<ResponseData> {
  const option: RequestOptions = {
    url,
    data: params,
    method: "POST",
    loading,
    showMsg,
    needToken,
  };

  return fetch(option);
}

/**
 * POST 请求 短超时请求 用于部分接口手动定义超时时间
 */
export function qPost(
  url: string,
  params: any,
  loading = true,
  needToken = true,
  timeout = 10000,
  showMsg = true
): Promise<ResponseData> {
  const option: RequestOptions = {
    url,
    data: params,
    method: "POST",
    loading,
    timeout,
    showMsg,
    needToken,
  };

  return fetch(option);
}

/**
 * GET请求
 */
export function get(
  url: string,
  params: any,
  loading = true,
  needToken = true,
  showMsg = true
): Promise<ResponseData> {
  const option: RequestOptions = {
    url,
    data: params,
    method: "GET",
    loading,
    showMsg,
    needToken,
  };

  return fetch(option);
}

/**
 * GET请求 短超时请求 用于部分接口手动定义超时时间
 */
export function qGet(
  url: string,
  params: any,
  loading = true,
  needToken = true,
  timeout = 10000,
  showMsg = true
): Promise<ResponseData> {
  const option: RequestOptions = {
    url,
    data: params,
    method: "GET",
    loading,
    timeout,
    showMsg,
    needToken,
  };

  return fetch(option);
}
