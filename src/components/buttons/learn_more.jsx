import "./button.scss";
const LearnMore = (props) => {
  return (
    <div className="learn-more">
      <button className={props.class}>Learn More</button>
    </div>
  );
};

export default LearnMore;
