import { useState } from "react";

interface TabsProps {
  tabs: Array<{
    label: string;
    content: React.ReactNode;
  }>;
  defaultActiveTab?: number;
  onTabChange?: (activeTabIndex: number) => void;
}

const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div className="terminal w-full  h-full grid grid-cols-1 grid-rows-[32px_auto]">
      <div className=" flex border-b  text-xs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item px-4 py-2 cursor-pointer border-b-2 ${
              index === activeTab ? " underline_ " : "border-transparent"
            }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className=" p-4 overflow-auto">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
