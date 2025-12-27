import { useCallback, useState } from "react";
import TerminalMenu from "./(menu)/TerminalMenu";
import FileMenu from "./(menu)/FileMenu";
import SelectionMenu from "./(menu)/SelectionMenu";
import ViewMenu from "./(menu)/ViewMenu";
import TrafficLight from "./TrafficLight";
import BarController from "./BarController";
import Button from "./UI/Button";
import { ChevronLeft, ChevronRight } from "./Icons";

interface MenuState {
  index: number;
  show: boolean;
}

const renderMenu = (index: number) => {
  switch (index) {
    case 0:
      return <FileMenu />;
    case 1:
      return <SelectionMenu />;
    case 2:
      return <ViewMenu />;
    case 3:
      return <TerminalMenu />;
    case 4:
      return null;
    default:
      return null;
  }
};

const MenuList = ["file", "Selection", "view", "terminal", "help"];

const TitleBar = () => {
  const [menuState, setMenuState] = useState<MenuState>({
    index: -1,
    show: false,
  });

  const handleMouseEnter = useCallback((index: number) => {
    setMenuState({ index: index, show: true });
  }, []);
  const handleMouseLeave = () => {
    setMenuState({ index: -1, show: false });
  };

  return (
    <>
      <div
        data-tauri-drag-region
        className="title-bar relative h-11 w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_500px_auto] max-lg:space-x-3 lg:grid-cols-3 font-normal text-xs  px-2"
      >
        {/* left */}
        <div className="flex items-center gap-4">
          <TrafficLight />
          <ul className="flex items-center max-lg:hidden relative">
            {MenuList.map((item, index) => {
              const active = index === menuState.index && menuState.show;
              return (
                <li
                  id={index.toString()}
                  onMouseEnter={() => handleMouseEnter(index)}
                  key={index}
                >
                  <button className="ghost-button px-2.5 py-1">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                  {active && (
                    <div
                      onMouseLeave={handleMouseLeave}
                      className={`absolute -left-4 top-9 z-10  w-96 h-auto menu-bar pl-0 `}
                    >
                      {renderMenu(index)}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {/* center */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center justify-center gap-4">
          <div className="flex items-center ">
            <Button title="Previous Page" children={<ChevronLeft />} />
            <Button title="Next Page" children={<ChevronRight />} />
          </div>
          <button
            aria-label="leaf app"
            title="leaf app"
            className="w-full py-1  h-7 secondary-button flex items-center justify-center"
          >
            <span>leaf</span>
          </button>
          <Button title="Some Title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          </Button>
        </div>
        {/* right */}
        <BarController />
      </div>
    </>
  );
};

export default TitleBar;
