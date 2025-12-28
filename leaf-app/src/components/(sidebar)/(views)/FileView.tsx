const FileView = ({
  fileName,
  depth = 0,
}: {
  fileName: string;
  depth?: number;
}) => {
  return (
    <div
      style={{
        paddingLeft: `${depth * 8 + 2}px`,
      }}
      className=" grid grid-cols-[20px_auto_48px] py-1 items-center child cursor-pointer"
    >
      <div className="w-5"></div>
      <p className="truncate">{fileName}</p>
      <div className="w-12"></div>
    </div>
  );
};

export default FileView;
