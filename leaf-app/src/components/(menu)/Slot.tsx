const Slot = ({
  name,
  shortcut,
  type = "slot",
}: {
  name: string;
  shortcut: string;
  type?: "slot" | "check-box" | "btn";
}) => {
  if (type === "slot") {
    return (
      <div className="grid grid-cols-2 menu-child p-2 cursor-pointer">
        <div className="grid grid-cols-[24px_auto] gap-1">
          <div className=""></div>
          <p className="font-semibold">{name}</p>
        </div>
        <div className="justify-self-end">
          <pre>{shortcut}</pre>
        </div>
      </div>
    );
  } else if (type === "btn") {
    return (
      <div className="grid grid-cols-2 items-center menu-child p-2 cursor-pointer">
        <div className="grid grid-cols-[24px_auto] gap-1">
          <div className=""></div>
          <p className="font-semibold">{name}</p>
        </div>
        <div className="justify-self-end flex items-center">
          <button title="More" aria-label="More">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              aria-hidden="true"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 menu-child p-2 cursor-pointer">
      <div className="grid grid-cols-[24px_auto] gap-1">
        <div className=""></div>
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Slot;
