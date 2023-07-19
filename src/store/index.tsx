import { create } from "zustand";

// User info
export const useUserStore = create((set) => ({
  // State
  user: {},
  //   Actions
  setUserInfo: (info: any) => set(() => ({ user: info })),
}));
