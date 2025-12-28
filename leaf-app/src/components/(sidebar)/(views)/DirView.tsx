import { sortDir } from "@/utils/(sidebar)";
import FileView from "./FileView";
import { ChevronDown, ChevronRight } from "@/components/Icons";
import { useEffect, useState } from "react";
import type { Explorer } from "@types";

const DirView = ({
  dirName,
  childItem = [],
  depth = 0,
}: {
  dirName: string;
  childItem?: Explorer[];
  depth?: number;
}) => {
  const [isOpen, setIsOpen] = useState(depth === 0 ? true : false);
  useEffect(() => {
    if (isOpen) {
      console.log("rendering", dirName, "with depth", depth);
    }
  }, [isOpen, dirName, depth]);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{
          paddingLeft: `${depth * 8 + 2}px`,
        }}
        className={` grid grid-cols-[20px_auto_48px] py-1 items-center child cursor-pointer`}
      >
        {isOpen && childItem.length > 0 ? <ChevronDown /> : <ChevronRight />}

        <p>{dirName}</p>
      </div>
      {childItem && isOpen && childItem.length > 0
        ? childItem.map((item, index) => {
            return item.type === "file" ? (
              <FileView key={index} fileName={item.name} depth={depth + 1} />
            ) : (
              <DirView
                key={index}
                dirName={item.name}
                childItem={sortDir(item)}
                depth={depth + 1}
              />
            );
          })
        : null}
    </>
  );
};
export default DirView;
