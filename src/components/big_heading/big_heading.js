import "./big_heading.scss";
import short_line from "../../images/lines/short_line.png";
const BigHeading = (props) => {
  return (
    <>
      <div className="big_heading">
        <h1>{props.headingText}</h1>
        <img src={short_line} alt="theme_line" style={props.style} />
        {props.isRightHeading ? <h3>See all our blogs</h3> : ""}
      </div>
    </>
  );
};

export default BigHeading;
