// 一些提示
export default class Tips {
  /**
   * 显示轻提示
   * @param title 提示文字内容
   * @param duration 提示持续时间（毫秒）
   * @returns Promise，在提示消失后 resolve
   */
  static toast(title: string, duration: number = 3000): Promise<void> {
    return new Promise((resolve) => {
      uni.showToast({
        title,
        icon: "none",
        duration,
      });

      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
}
