import create from "zustand";

const useUserStore = create((set) => ({
    user: {},
    setUser: (newuser) => set({ user: newuser }),
}));

export default useUserStore;
