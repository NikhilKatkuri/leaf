import { PanelBottom, PanelLeft, PanelRight } from "./Icons";
import Button from "./UI/Button";

const BarController = () => {
  return (
    <div className="w-full flex items-center justify-end">
      <Button title="Split Editor" children={<PanelLeft />} />
      <Button title="Split Editor" children={<PanelRight />} />
      <Button title="Split Editor" children={<PanelBottom />} />
    </div>
  );
};

export default BarController;
