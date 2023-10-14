import { create } from 'zustand';
import { DataItem } from '@type/types';

type Data = DataItem[];

interface Store {
    data: Data;
    // eslint-disable-next-line no-unused-vars
    setData: (data: Data) => void;
}
// created a custom hook 'useStore' for global state management
export const useStore = create<Store>((set) => ({
    data: [],
    setData: (data) => set({ data }),
}));
