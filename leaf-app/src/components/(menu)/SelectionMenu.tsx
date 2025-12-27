import Slot from "./Slot";

const SelectionShortcuts = [
  { name: "Select All", shortcut: "Ctrl + A" },
  { name: "Expand Selection", shortcut: "Ctrl + Alt + A" },
  { name: "Shrink Selection", shortcut: "Ctrl + Shift + A" },
  { name: "Copy Line Up", shortcut: "Shift + Alt + UpArrow" },
  { name: "Copy Line Down", shortcut: "Shift + Alt + DownArrow" },
  { name: "Move Line Up", shortcut: "Alt + UpArrow" },
  { name: "Move Line Down", shortcut: "Alt + DownArrow" },
  { name: "Duplicate Selection", shortcut: "Ctrl + Alt + D" },
  { name: "Add Cursor Above", shortcut: "Ctrl + Alt + UpArrow" },
  { name: "Add Cursor Below", shortcut: "Ctrl + Alt + DownArrow" },
  { name: "Add Next Occurrence", shortcut: "Ctrl + D" },
  { name: "Add Previous Occurrence", shortcut: "Ctrl + D + UpArrow" },
  { name: "Select All Occurrences", shortcut: "Ctrl + Shift + D" },
];

const SelectionMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-3 w-auto">
      <div className="grid grid-cols-1 ">
        {SelectionShortcuts.slice(0, 3).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {SelectionShortcuts.slice(3, 8).map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-200 px-2"></div>
      <div className="grid grid-cols-1 ">
        {SelectionShortcuts.slice(8, SelectionShortcuts.length).map((item) => (
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

export default SelectionMenu;
