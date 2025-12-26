/**
 * Base color palette - minimal required colors
 */
interface BaseColors {
    background: string;
    color: string;
    border: string;
    accent: string;
    primary: string;
    secondary: string;
}

/**
 * Interactive component colors (with hover states)
 */
interface InteractiveColors {
    background: string;
    color: string;
    border: string;
    hoverBackground: string;
    hoverColor: string;
}

/**
 * Simple input/field colors
 */
interface InputColors {
    background: string;
    color: string;
    border: string;
}

/**
 * Sidebar specific colors with selection states
 */
interface SidebarColors extends InteractiveColors {
    highlight: string;
    selected: string;
}

/**
 * All UI component colors
 */
interface ThemeColors extends BaseColors {
    titleBar: InteractiveColors;
    activityBar: InteractiveColors;
    sidebar: SidebarColors;
    input: InputColors;
    statusBar: InteractiveColors;
    terminal: InteractiveColors;
    panel: InteractiveColors;
    editor: InteractiveColors;
}

/**
 * Complete theme definition
 */
interface Theme {
    name: string;
    type: 'dark' | 'light';
    colors: ThemeColors;
}

interface ThemeState {
    theme: Theme | null;
    isLoading: boolean;
    error: string | null;
}

interface ThemeActions {
    setTheme: (theme: Theme) => void;
    loadTheme: (themeName: string) => Promise<void>;
    loadThemeFromFile: (file: File) => Promise<void>;
    resetTheme: () => void;
}

type ThemeStore = ThemeState & ThemeActions;

export type { ThemeStore, ThemeState, ThemeActions };

export type { BaseColors, InputColors, InteractiveColors, SidebarColors, ThemeColors, Theme };
