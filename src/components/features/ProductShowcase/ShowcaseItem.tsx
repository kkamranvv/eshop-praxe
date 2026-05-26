import "./ShowcaseItem.css";

interface ShowcaseItemProps {
  isActive: boolean;
  item: {
    tag: string;
    title: string;
    price: number;
    image: string;
  };
}

const ShowcaseItem = ({ isActive, item }: ShowcaseItemProps) => {
  return (
    <div className={`showcase-item${isActive ? " showcase-item--active" : ""}`}>
      <span className="showcase-item-tag">{item.tag}</span>
      <h3 className="showcase-item-title">{item.title}</h3>
      <span className="showcase-item-price">${item.price}</span>
    </div>
  );
};

export default ShowcaseItem;
