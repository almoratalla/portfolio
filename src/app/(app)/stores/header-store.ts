import { create } from "zustand";

interface HeaderStore {
    isNavOpen: boolean;
    setNavOpen: (navState?: boolean) => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
    isNavOpen: false,
    setNavOpen: (navState?: boolean) =>
        set((state) => ({
            isNavOpen: navState !== undefined ? navState : !state.isNavOpen,
        })),
}));

export default useHeaderStore;
