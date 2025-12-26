import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function useThemeContext() {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }
    return theme;
}

export default useThemeContext;
