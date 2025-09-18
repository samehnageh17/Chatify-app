import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "Sameh", _id: 1, age: 21 },
  isLoggedIn: false,
  isLoading: false,

  login: () => {
    console.log("We just Logged in");
    set({ isLogged: true, isLoading: true });
  },
}));
