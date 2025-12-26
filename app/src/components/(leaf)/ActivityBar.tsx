import { CircleUser, Folder, Search, Settings } from 'lucide-react';
import ToolButton from '../ui/ToolButton';
const ActivityBar = () => {
    return (
        <div className='bg-var(--activity-bar-background)] flex h-full w-12 flex-col items-center justify-between border-r border-(--activity-bar-border) py-2'>
            <div className='flex h-auto w-full flex-col items-center gap-3'>
                <ToolButton
                    tooltip='Explorer'
                    tooltipSide='right'
                    iconSize='md'
                    aria-label='Explorer'
                >
                    <Folder />
                </ToolButton>
                <ToolButton tooltip='Search' tooltipSide='right' iconSize='md' aria-label='Search'>
                    <Search />
                </ToolButton>
            </div>
            <div className='flex h-auto w-full flex-col items-center gap-3'>
                <ToolButton
                    tooltip='Accounts'
                    tooltipSide='right'
                    iconSize='md'
                    aria-label='Accounts'
                >
                    <CircleUser />
                </ToolButton>

                <ToolButton
                    tooltip='Accounts'
                    tooltipSide='right'
                    iconSize='md'
                    aria-label='Accounts'
                >
                    <Settings />
                </ToolButton>
            </div>
        </div>
    );
};

export default ActivityBar;
