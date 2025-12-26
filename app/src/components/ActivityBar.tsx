import useThemeContext from '@/context/theme/useThemeContext';
import { FileOpenIcon, SearchIcon, SettingsIcon, UserIcon } from './icons';
import React from 'react';

interface ActivityButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    active?: boolean;
    color?: string;
}
const ActivityButton = ({ children, color, active = false }: ActivityButtonProps) => {
    return (
        <button
            style={{
                backgroundColor: active ? color : 'transparent',
            }}
            className={`hover:bg-opacity-20 active:bg-opacity-30 relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-md transition-all duration-150 ease-out hover:scale-110 active:scale-95`}
        >
            {children}
        </button>
    );
};

const ActivityBar = () => {
    const theme = useThemeContext();
    const { hoverBackground, hoverColor, ...curr } = theme.colors.activityBar;

    if (import.meta.env.DEV) {
        console.log('ActivityBar colors:', { hoverBackground, hoverColor, ...curr });
    }

    return (
        <div
            style={{
                backgroundColor: curr.background,
                color: curr.color,
                borderColor: curr.border,
            }}
            className="z-10 grid h-full w-14 grid-rows-[auto_96px] overflow-hidden border-r py-2 select-none"
        >
            <div className="w-full">
                <ActivityButton color={hoverBackground}>
                    <FileOpenIcon color={curr.color} />
                </ActivityButton>
                <ActivityButton color={hoverBackground}>
                    <SearchIcon color={curr.color} />
                </ActivityButton>
            </div>

            {/* Icons */}
            <div className="w-full px-1">
                <ActivityButton title="Accounts" color={hoverBackground}>
                    <UserIcon color={curr.color} />
                </ActivityButton>
                <ActivityButton color={hoverBackground}>
                    <SettingsIcon color={curr.color} />
                </ActivityButton>
            </div>
        </div>
    );
};

export default ActivityBar;
