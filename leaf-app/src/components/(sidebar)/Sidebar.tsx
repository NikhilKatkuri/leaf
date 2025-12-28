import type { Explorer } from "@types";
import { sortDir } from "@/utils/(sidebar)/Explorer";
import DirView from "./(views)/DirView";

const directory: Explorer = {
  type: "directory",
  name: "leaf-app",
  children: [
    {
      type: "file",
      name: "index.html",
    },
    {
      type: "file",
      name: "package.json",
    },
    {
      type: "file",
      name: "vite.config.ts",
    },
    {
      type: "file",
      name: "tsconfig.json",
    },
    {
      type: "file",
      name: ".gitignore",
    },
    {
      type: "directory",
      name: "public",
      children: [
        {
          type: "file",
          name: "vite.svg",
        },
      ],
    },
    {
      type: "directory",
      name: "src",
      children: [
        {
          type: "file",
          name: "main.tsx",
        },
        {
          type: "file",
          name: "App.tsx",
        },
        {
          type: "file",
          name: "App.css",
        },
        {
          type: "directory",
          name: "assets",
          children: [
            {
              type: "file",
              name: "react.svg",
            },
          ],
        },
      ],
    },
    {
      type: "directory",
      name: "node_modules",
      children: [],
    },
  ],
};

const Sidebar = () => {
  return (
    <aside className="h-full w-full  sidebar text-[13px] font-medium">
      <header className="pl-2 grid grid-cols-[20px_auto_48px] py-2 items-center">
        <div className=""></div>
        <p>Explorer</p>
      </header>
      <DirView dirName={directory.name} childItem={sortDir(directory)} />
    </aside>
  );
};

export default Sidebar;
