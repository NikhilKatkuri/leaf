import TitleBar from "@/components/TitleBar";
import Sidebar from "@/components/(sidebar)/Sidebar";
import { ResizablePanelGroup } from "@/components/(resizable)/Resizable";
import { Panel } from "react-resizable-panels";

const App = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 grid-rows-[44px_1fr_36px]">
      <TitleBar />
      <div className="flex w-full h-full overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-screen">
          <Panel collapsible collapsedSize={0} defaultSize={20} minSize={12}>
            <Sidebar />
          </Panel>
          <Panel minSize={24}>
            <p>code ediote</p>
          </Panel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default App;
