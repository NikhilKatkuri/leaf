const Sidebar = () => {
    return (
        <div className='h-full w-full bg-(--side-bar-background)'>
            <div className='flex h-8 w-full items-center bg-(--side-bar-section-header-background) px-2 text-xs font-semibold text-(--side-bar-section-header-foreground)'>
                <p>Explorer</p>
            </div>
        </div>
    );
};

export default Sidebar;
