import { create } from 'zustand';
import theme from '@themes/macbook-dark.json';
import type { Theme, ThemeStore } from '@/types/Theme';

const useTheme = create<ThemeStore>((set) => ({
    // State
    theme: theme as Theme,
    isLoading: false,
    error: null,

    // Actions
    setTheme: (theme: Theme) =>
        set({
            theme,
            error: null,
        }),

    loadTheme: async (themeName: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch(`/themes/${themeName}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load theme: ${themeName}`);
            }
            const theme: Theme = await response.json();
            set({ theme, isLoading: false });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            set({ error: errorMessage, isLoading: false });
        }
    },

    loadThemeFromFile: async (file: File) => {
        set({ isLoading: true, error: null });
        try {
            const text = await file.text();
            const theme: Theme = JSON.parse(text);

            // Validate theme structure
            if (!theme.name || !theme.type || !theme.colors) {
                throw new Error('Invalid theme structure');
            }

            set({ theme, isLoading: false });
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : 'Failed to parse theme file';
            set({ error: errorMessage, isLoading: false });
        }
    },

    resetTheme: () =>
        set({
            theme: null,
            error: null,
            isLoading: false,
        }),
}));

export default useTheme;
