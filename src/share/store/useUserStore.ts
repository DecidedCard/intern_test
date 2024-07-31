import { create } from "zustand";
import type { User } from "../../types";

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<Store>()((set) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user })),
}));

export default useUserStore;
