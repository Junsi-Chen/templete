type Nullable<T> = T | null | undefined;
// 登录信息对象
export default class Authorization {
  // 令牌
  accessToken: Nullable<string> = null;
  // 过期时间
  expiresAt: Nullable<string> = null;
  // 创建时间
  issuedAt: Nullable<string> = null;
  // 用户id
  userId: Nullable<string> = null;
  // 用户名
  username: Nullable<string> = null;
}
