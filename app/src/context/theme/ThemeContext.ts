import { createContext } from 'react';
import type { Theme } from '@/types/Theme';

export const ThemeContext = createContext<Theme | null>(null);
