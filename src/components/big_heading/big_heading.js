import "./big_heading.scss";

const BigHeading = (props) => {
  return (
    <>
      <div className="big_heading">
        <h1>{props.headingText}</h1>
        {props.isRightHeading ? <h3>See all our blogs</h3> : ""}
      </div>
      <hr className="line" />
    </>
  );
};

export default BigHeading;
