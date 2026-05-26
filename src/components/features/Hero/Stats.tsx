import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats-item">
        <span className="stats-value">x</span>
        <span className="stats-label">Items in stock</span>
      </div>
      <div className="stats-item">
        <span className="stats-value">x</span>
        <span className="stats-label">Categories</span>
      </div>
      <div className="stats-item">
        <span className="stats-value">x h</span>
        <span className="stats-label">Average ship time</span>
      </div>
    </div>
  );
};

export default Stats;
