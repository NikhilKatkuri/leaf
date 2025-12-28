export interface Explorer {
  type: "file" | "directory";
  name: string;
  children?: Explorer[];
}
