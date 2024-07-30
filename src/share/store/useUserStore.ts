import { create } from "zustand";
import type { User } from "../../types";

type Store = {
  user: User;
  setUser: (user: User) => void;
};

const initial = {
  avatar: "",
  nickname: "",
};

const useUserStore = create<Store>()((set) => ({
  user: initial,
  setUser: (user: User) => set(() => ({ user })),
}));

export default useUserStore;
