import useTheme from '@/hooks/useTheme';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    if (import.meta.env.DEV) {
        console.log('Current theme:', theme);
    }

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
