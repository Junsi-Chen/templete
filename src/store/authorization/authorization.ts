// 保存auth -> token

import Authorization from "@/model/authorization/Authorization";

import { defineStore } from "pinia";

interface AuthStore {
  authorization: Authorization | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthStore => ({
    authorization: null,
  }),
  actions: {
    // 保存授权信息
    saveAuthorization(authorization: Authorization) {
      this.authorization = CommonUtil.deepClone(authorization);
    },
  },
  getters: {
    // 获取授权信息
    getAuthorization(): Authorization | null {
      return this.authorization;
    },
  },
});
