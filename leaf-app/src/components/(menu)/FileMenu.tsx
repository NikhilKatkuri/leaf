import Slot from "./Slot";

const FileShortcuts = [
  { name: "Open file", shortcut: "Ctrl + O" },
  { name: "Open folder", shortcut: "Ctrl + Shift + O" },
  { name: "Open Recent", shortcut: "Ctrl + Alt + W" },
  { name: "Create file", shortcut: "Ctrl + N" },
  { name: "Create Folder", shortcut: "Ctrl + Alt + N" },
  { name: "Save", shortcut: "Ctrl + S" },
  { name: "Save As", shortcut: "Ctrl + Alt + S" },
  { name: "Save All", shortcut: "Ctrl + K + S" },
  { name: "Auto Save", shortcut: "" },
];

const FileMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="grid grid-cols-1 ">
        {FileShortcuts.slice(0, 3).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {FileShortcuts.slice(3, 5).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {FileShortcuts.slice(5, 9).map((item) => (
          <Slot
            key={item.name}
            name={item.name}
            shortcut={item.shortcut}
            type={item.name === "Auto Save" ? "check-box" : "slot"}
          />
        ))}
      </div>
    </div>
  );
};

export default FileMenu;
