import type { Explorer } from "@types";

export const getValue = (type: Explorer["type"]) => {
  return type === "file" ? 2 : 1;
};

export const sortDir = (items: Explorer) => {
  return items?.children
    ?.sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => getValue(a.type) - getValue(b.type));
};
