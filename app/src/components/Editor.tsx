import useThemeContext from '@/context/theme/useThemeContext';

const Editor = () => {
    const theme = useThemeContext();
    const { hoverBackground, hoverColor, ...curr } = theme.colors.editor;
    return (
        <div style={{ ...curr }} className="p-2">
            {/* Your component code */}
            <h2>Editor </h2>
        </div>
    );
};

export default Editor;
