import ActivityBar from './components/ActivityBar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';
import TittleBar from './components/TittleBar';

const App = () => {
    return (
        <div className="grid h-full min-h-screen grid-rows-[40px_auto_32px]">
            <TittleBar />
            <div className="grid h-full w-full grid-cols-[48px_1fr]">
                <ActivityBar />
                <Editor />
            </div>
            <StatusBar />
        </div>
    );
};

export default App;
