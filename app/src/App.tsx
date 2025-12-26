import ActivityBar from './components/ActivityBar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';
import TittleBar from './components/TittleBar';

const App = () => {
    return (
        <div className="grid h-auto grid-rows-[40px_1fr_auto]">
            <TittleBar />
            <div className="grid grid-cols-[200px_1fr]">
                <ActivityBar />
                <Editor />
            </div>
            <StatusBar />
        </div>
    );
};

export default App;
