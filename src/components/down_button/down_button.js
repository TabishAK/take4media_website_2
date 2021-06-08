import { AiOutlineArrowDown } from "react-icons/ai";
import "./down_button.scss";

const DownButton = (props) => {
  return (
    <div
      className="down-button mr-5"
      onClick={() => props.makeScroll("scroll")}
    >
      <AiOutlineArrowDown />
    </div>
  );
};

export default DownButton;
