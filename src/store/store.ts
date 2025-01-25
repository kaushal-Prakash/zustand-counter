import { create } from 'zustand'

type Store = {
    count: number;
    increament: () => void;
    decreament: () => void;
}

export const countStore = create<Store>((set) => ({
  count: 0,
  increament: () => set((state) => ({ count: state.count + 1 })),
  decreament: () => set((state) => ({ count: state.count - 1 })),
}));
