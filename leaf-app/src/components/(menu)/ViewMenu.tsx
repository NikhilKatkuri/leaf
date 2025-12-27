import Slot from "./Slot";

const ViewShortcuts = [
  { name: "Command Palette", shortcut: "Ctrl + Shift + P" },
  { name: "Open View", shortcut: "" },
  { name: "Appearance", shortcut: " " },
  { name: "Editor Layout", shortcut: "" },
  { name: "Explorer", shortcut: "Ctrl + Shift + E" },
  { name: "Search", shortcut: "Ctrl + K" },
  { name: "Extensions", shortcut: "Alt + X" },
  { name: "Chat", shortcut: "Alt + C" },
  { name: "Problems", shortcut: "Ctrl + /" },
  { name: "Terminal", shortcut: "Ctrl + `" },
];

const ViewMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-3 w-auto">
      <div className="grid grid-cols-1 ">
        {ViewShortcuts.slice(0, 2).map((item, index) => (
          <Slot
            key={item.name}
            name={item.name}
            shortcut={item.shortcut}
            type={index == 1 ? "btn" : "slot"}
          />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {ViewShortcuts.slice(2, 4).map((item) => (
          <Slot
            key={item.name}
            name={item.name}
            shortcut={item.shortcut}
            type="btn"
          />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {ViewShortcuts.slice(4, 8).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {ViewShortcuts.slice(8, ViewShortcuts.length).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
    </div>
  );
};

export default ViewMenu;
