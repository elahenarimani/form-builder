import { create } from "zustand";
import { persist } from "zustand/middleware";
interface User {
  email: string;
  password: string;
}
interface authoPrpos {
  users: User[];
  isAuthenticated: boolean;
  userEmail: string | null;
  logIn: (email: string, password: string) => boolean;
  signUp: (email: string, password: string) => boolean;
  logout: () => void;
}
export const authStore = create<authoPrpos>()(
  persist(
    (set, get) => ({
      users: [],
      isAuthenticated: false,
      userEmail: null,
      logIn: (email, password) => {
        const finder = get().users.find(
          (user) => user.email === email && user.password === password
        );
        if (finder) {
          set({ isAuthenticated: true, userEmail: email });
          return true;
        } else {
          return false;
        }
      },
      signUp: (email, password) => {
        const exists = get().users.some((u) => u.email === email);
        if (exists) return false;
        set((state) => ({
          users: [...state.users, { email, password }],
        }));
        return true;
      },
      logout: () => set({ isAuthenticated: false, userEmail: null }),
    }),
    {
      name: "log-in-storage",
    }
  )
);
