import { defineStore } from "pinia"

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    count: 0,
    firstName: "张",
    lastName: "三"
  }),
  //计算属性
  getters: {
    name: (state) => state.firstName + state.lastName
  },
  actions: {
    async addAmount(amount: number) {
      this.count += amount
      useUserStore().change()
    }
  }
})

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userName: "A"
  }),
  actions: {
    async change() {
      this.userName = "new"
    }
  }
})
