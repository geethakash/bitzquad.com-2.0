import create from "zustand";

const useUserStore = create((set) => ({
    user: {},
    setUser: (user) => set((state) => ({ ...state, user })),
}));

export default useUserStore;
