import Slot from "./Slot";

const TerminalShortcuts = [
  { name: "New Terminal", shortcut: "ctrl + shift + `" },
  { name: "Split Terminal", shortcut: "ctrl + shift + \\" },
];

const TerminalMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-3 py-2">
      <div className="grid grid-cols-1 ">
        {TerminalShortcuts.map((item) => (
          <Slot key={item.name} name={item.name} shortcut={item.shortcut} />
        ))}
      </div>
    </div>
  );
};

export default TerminalMenu;
