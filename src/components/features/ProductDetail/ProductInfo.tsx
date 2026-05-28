import "./ProductInfo.css";

interface Props {
  title: string;
  category: string;
  price: number;
  description: string;
  rating: { rate: number; count: number };
}

const ProductInfo = ({ title, category, price, description, rating }: Props) => (
  <div>
    <span className="pdp-category">{category}</span>
    <h1 className="pdp-title">{title}</h1>

    <div className="pdp-rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`pdp-star${n <= Math.round(rating.rate) ? " pdp-star--filled" : ""}`}
        >
          ★
        </span>
      ))}
      <span className="pdp-rating-value">{rating.rate}</span>
      <span className="pdp-rating-count">({rating.count} reviews)</span>
    </div>

    <p className="pdp-price">${price}</p>
    <p className="pdp-description">{description}</p>
  </div>
);

export default ProductInfo;
