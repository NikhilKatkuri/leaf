import ActivityBar from './components/(leaf)/ActivityBar';
// import StatusBar from './components/(leaf)/StatusBar';
import TittleBar from './components/(leaf)/TittleBar';

const App = () => {
    return (
        <div className='grid h-screen w-full grid-rows-[44px_auto]'>
            <TittleBar />
            <div className='grid grid-cols-[48px_auto]'>
                <ActivityBar />
            </div>
            {/* <StatusBar /> */}
        </div>
    );
};

export default App;
