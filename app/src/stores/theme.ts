import { create } from 'zustand/react';

interface ThemeState {
    currTheme: string;
    setTheme: (theme: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    currTheme: '',
    setTheme: (theme: string) => set({ currTheme: theme }),
}));

export default useThemeStore;
