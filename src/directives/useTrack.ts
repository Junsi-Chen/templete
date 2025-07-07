// 埋点参数类型定义
interface TrackParams {
  actionType: string;
  buttonText?: string;
  pageText?: string;
  clickTime?: number;
  path?: string;
  page?: string | symbol;
}

// 创建单例模式的埋点管理器
class TrackManager {
  private static instance: TrackManager;

  private constructor() {}

  public static getInstance(): TrackManager {
    if (!TrackManager.instance) {
      TrackManager.instance = new TrackManager();
    }
    return TrackManager.instance;
  }

  // 埋点上报函数
  private trackEvent(params: TrackParams) {
    console.log("埋点上报:", params);
    // 实际埋点上报逻辑
  }

  // 创建埋点处理函数 - 直接接收元素
  public createTrackHandler(handler?: (event: Event) => void) {
    return (event: Event) => {
      // 获取当前元素事件
      const currentTarget = event.target as any;
      // 拿到tkname
      const buttonText = currentTarget.dataset.tkname || "";
      // 页面信息
      const pageInfo = getCurrentPath();
      // 参数
      const params: TrackParams = {
        actionType: "click",
        buttonText: buttonText,
        clickTime: Date.now(),
      };
      // 如果有页面参数
      if (pageInfo) {
        const { path, name, meta } = pageInfo;
        params.path = path;
        params.pageText = meta?.title;
        params.page = name;
      }

      // 如果有buttonText
      if(buttonText) {
        this.trackEvent(params);
      }

      // 调用原始事件处理函数
      if (handler && typeof handler === "function") {
        handler(event);
      }
    };
  }
}

// 创建单例实例
const trackManager = TrackManager.getInstance();

// 优化后的 useTrack 函数
export function useTrack() {
  // 返回一个函数，接收事件处理函数
  const withTrack = (handler?: (event: Event) => void) => {
    return trackManager.createTrackHandler(handler);
  };
  return {
    withTrack,
  };
}
