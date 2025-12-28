import { PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { type ReactNode, Children, isValidElement } from "react";

interface ResizablePanelGroupProps {
  children: ReactNode;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export function ResizablePanelGroup({
  children,
  direction = "horizontal",
  className = "",
}: ResizablePanelGroupProps) {
  const panels: ReactNode[] = [];
  const handles: ReactNode[] = [];

  Children.toArray(children).forEach((child, index) => {
    if (isValidElement<{ defaultSize?: number; minSize?: number }>(child)) {
      panels.push(child);

      if (index < Children.count(children) - 1) {
        handles.push(
          <PanelResizeHandle
            key={`handle-${index}`}
            className={`${
              direction === "horizontal"
                ? "w-px cursor-col-resize"
                : "h-px cursor-row-resize"
            } bg-gray-300 hover:bg-gray-400 transition-colors`}
          />
        );
      }
    }
  });

  return (
    <PanelGroup
      direction={direction}
      className={`flex ${
        direction === "horizontal" ? "h-full" : "w-full flex-col"
      } ${className}`}
    >
      {panels.reduce((acc: ReactNode[], panel, index) => {
        acc.push(panel);
        if (handles[index]) acc.push(handles[index]);
        return acc;
      }, [])}
    </PanelGroup>
  );
}
