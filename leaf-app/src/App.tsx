import TitleBar from "@/components/TitleBar";
import Sidebar from "@/components/(sidebar)/Sidebar";
import { ResizablePanelGroup } from "@/components/(resizable)/Resizable";
import { Panel } from "react-resizable-panels";
import Tabs from "@/components/(tabs)/Tabs";

const App = () => {
  return (
    <div className="h-screen w-full grid grid-cols-1 grid-rows-[44px_1fr_36px]">
      <TitleBar />
      <div className="flex w-full h-full overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <Panel collapsible collapsedSize={0} defaultSize={20} minSize={12}>
            <Sidebar />
          </Panel>
          <Panel minSize={28}>
            <ResizablePanelGroup direction="vertical" className="h-full">
              <Panel defaultSize={100}>
                <p>code Editor</p>
              </Panel>
              <Panel collapsible collapsedSize={0} defaultSize={0} minSize={12}>
                <Tabs
                  tabs={[
                    { label: "Terminal", content: <p>Terminal Content</p> },
                    { label: "Problems", content: <p>Problems Content</p> },
                    { label: "Output", content: <p>Output Content</p> },
                    {
                      label: "Debug Console",
                      content: <p>Debug Console Content</p>,
                    },
                  ]}
                />
              </Panel>
            </ResizablePanelGroup>
          </Panel>
          <Panel defaultSize={0} minSize={0} maxSize={55}>
            <>
              <p>Ai chatbar</p>
            </>
          </Panel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default App;
