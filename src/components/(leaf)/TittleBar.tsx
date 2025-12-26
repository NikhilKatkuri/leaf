import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import {
    ChevronLeft,
    ChevronRight,
    PanelBottomDashed,
    PanelLeftDashed,
    PanelRightDashed,
    Search,
    Settings,
} from 'lucide-react';
import { getCurrentWindow } from '@tauri-apps/api/window';

class tools {
    private window = getCurrentWindow();

    async minimize() {
        await this.window.minimize();
    }

    async maximize() {
        await this.window.toggleMaximize();
    }

    async close() {
        await this.window.close();
    }
}

const TitleBar = () => {
    const windowControls = new tools();

    return (
        <div data-tauri-drag-region className='border-b border-(--title-bar-border)'>
            <div className='title-bar grid h-11 grid-cols-[1fr_auto] items-center bg-(--title-bar-active-background) px-3 py-2 text-(--title-bar-active-foreground) max-lg:gap-6 lg:grid-cols-2'>
                {/* Left section - Window controls & navigation */}
                <div data-tauri-drag-noregion className='flex w-auto items-center gap-3'>
                    {/* macOS traffic lights */}
                    <div className='flex items-center gap-1.5'>
                        <button
                            onClick={() => windowControls.close()}
                            className='h-3 w-3 rounded-full bg-[#ff453a] transition-colors hover:bg-[#d70015]'
                            aria-label='Close'
                        />
                        <button
                            onClick={() => windowControls.minimize()}
                            className='h-3 w-3 rounded-full bg-[#ffd60a] transition-colors hover:bg-[#bf8f00]'
                            aria-label='Minimize'
                        />
                        <button
                            onClick={() => windowControls.maximize()}
                            className='h-3 w-3 rounded-full bg-[#30d158] transition-colors hover:bg-[#28cd41]'
                            aria-label='Maximize'
                        />
                    </div>

                    {/* Navigation buttons */}
                    <div className='flex items-center *:text-(--title-bar-active-foreground)'>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant='ghost'
                                    size='icon-sm'
                                    className='h-7 w-7 text-(--title-bar-active-foreground)'
                                >
                                    <ChevronLeft className='h-4 w-4' />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Back</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant='ghost'
                                    size='icon-sm'
                                    className='h-7 w-7 text-(--title-bar-active-foreground)'
                                >
                                    <ChevronRight className='h-4 w-4' />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Forward</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>

                    {/* Menu items - hidden on mobile */}
                    <nav className='hidden items-center md:flex'>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            File
                        </Button>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            Edit
                        </Button>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            View
                        </Button>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            Go
                        </Button>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            Terminal
                        </Button>
                        <Button variant='ghost' size='sm' className='h-7 px-2 text-xs'>
                            Help
                        </Button>
                    </nav>
                    <div data-tauri-drag-noregion className='maxw-md w-full flex-1'>
                        <Button
                            variant='outline'
                            className='text-muted-foreground hover:text-foreground h-7 w-full justify-start gap-2 px-3'
                        >
                            <Search className='h-3.5 w-3.5' />
                            <span className='text-xs'>Search files...</span>
                        </Button>
                    </div>
                </div>

                {/* Right section - Panel controls */}
                <div
                    data-tauri-drag-noregion
                    className='flex w-full items-center justify-end gap-1 self-end *:text-(--title-bar-active-foreground)'
                >
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon-sm'
                                className='h-7 w-7 text-(--title-bar-active-foreground)'
                            >
                                <PanelLeftDashed className='h-4 w-4' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Toggle Sidebar</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon-sm'
                                className='h-7 w-7 text-(--title-bar-active-foreground)'
                            >
                                <PanelBottomDashed className='h-4 w-4' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Toggle Bottom Panel</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon-sm'
                                className='h-7 w-7 text-(--title-bar-active-foreground)'
                            >
                                <PanelRightDashed className='h-4 w-4' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Toggle Side Panel</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon-sm'
                                className='h-7 w-7 text-(--title-bar-active-foreground)'
                            >
                                <Settings className='h-4 w-4' />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Settings</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <div className='bloom h-[0.5px] w-full'></div>
        </div>
    );
};

export default TitleBar;
