import "./ShowcaseItem.css";

interface ShowcaseItemProps {
  isActive: boolean;
}

const ShowcaseItem = ({ isActive }: ShowcaseItemProps) => {
  return (
    <div className={`showcase-item${isActive ? " showcase-item--active" : ""}`}>
      <span className="showcase-item-tag">Tag</span>
      <h3 className="showcase-item-title">Product name</h3>
      <span className="showcase-item-price">$0.00</span>
    </div>
  );
};

export default ShowcaseItem;
