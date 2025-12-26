import useThemeContext from '@/context/theme/useThemeContext';

const StatusBar = () => {
    const theme = useThemeContext();
    const { hoverBackground, hoverColor, ...curr } = theme.colors.statusBar;
    return (
        <div style={{ ...curr }} className="flex h-8 items-center border-t px-4">
            {/* Your component code */}
            <h2>StatusBar </h2>
        </div>
    );
};

export default StatusBar;
