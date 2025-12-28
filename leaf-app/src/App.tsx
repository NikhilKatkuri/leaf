import TitleBar from "@/components/TitleBar";
import Sidebar from "@/components/(sidebar)/Sidebar";

const App = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 grid-rows-[44px_1fr_36px]">
      <TitleBar />
      <div className="grid grid-cols-[300px_auto] w-full h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
