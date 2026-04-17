import { create } from "zustand";
import API from "../services/api";

interface User {
  id: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  loading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    try {
      const res = await API.get("/auth/me");
      set({ user: res.data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  logout: () => {
    set({ user: null });
    window.location.href = "/auth/login";
  },
}));