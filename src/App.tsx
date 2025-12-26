import ActivityBar from './components/(leaf)/ActivityBar';
import Sidebar from './components/(leaf)/Sidebar';
// import StatusBar from './components/(leaf)/StatusBar';
import TittleBar from './components/(leaf)/TittleBar';
import Editor from './components/Editor/Editor';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
const App = () => {
    return (
        <div className='grid h-screen w-full grid-rows-[44px_auto]'>
            <TittleBar />
            <div className='grid grid-cols-[48px_auto]'>
                <ActivityBar />
                <ResizablePanelGroup direction='horizontal'>
                    <ResizablePanel defaultSize={20}>
                        <Sidebar />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={80}>
                        <Editor />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            {/* <StatusBar /> */}
        </div>
    );
};

export default App;
