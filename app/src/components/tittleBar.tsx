import useThemeContext from '@/context/theme/useThemeContext';
import windowControls from '@/tools/menu';
import { useEffect, useEffectEvent } from 'react';

const TitleBar = () => {
    const theme = useThemeContext();
    const { hoverColor, hoverBackground, ...curr } = theme.colors.titleBar;

    if (import.meta.env.DEV && !(hoverBackground && hoverColor)) {
        console.log('No hover colors found');
    }

    const controls = new windowControls();

    const fullScreenHandler = useEffectEvent(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'F11') {
                e.preventDefault();
                controls.toggleFullscreen();
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    useEffect(() => {
        fullScreenHandler();
    }, []);

    return (
        <div
            style={{ ...curr }}
            className="title-bar relative z-10 flex h-10 items-center p-2 select-none"
        >
            <div className="flex items-center space-x-1.5 p-1">
                <button
                    className="traffic transition-all duration-150 hover:scale-110 active:scale-95"
                    onClick={() => controls.close()}
                    style={{ '--traffic-color': 'var(--traffic-red)' } as React.CSSProperties}
                    title="Close"
                />

                <button
                    className="traffic transition-all duration-150 hover:scale-110 active:scale-95"
                    onClick={() => controls.minimize()}
                    style={{ '--traffic-color': 'var(--traffic-yellow)' } as React.CSSProperties}
                    title="Minimize"
                />

                <button
                    className="traffic transition-all duration-150 hover:scale-110 active:scale-95"
                    onClick={() => controls.maximize()}
                    style={{ '--traffic-color': 'var(--traffic-green)' } as React.CSSProperties}
                    title="Maximize"
                />
            </div>

            <div
                data-tauri-drag-region
                className="absolute top-0 right-0 bottom-0 left-16 flex items-center px-4"
            >
                <div className="truncate text-sm font-medium">Leaf Editor</div>
            </div>
        </div>
    );
};

export default TitleBar;
