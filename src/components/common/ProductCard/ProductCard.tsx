import { useAddToCart } from "../../../utils/useAddToCart";
import "./ProductCard.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  items: Product[];
}

const ProductCard = ({ items }: ProductCardProps) => {
  const { added, handleAdd } = useAddToCart();

  return (
    <div className="product-card-list">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <div className="product-card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-card-body">
            <span className="product-card-category">{item.category}</span>
            <h3 className="product-card-title">{item.title}</h3>
            <div className="product-card-footer">
              <span className="product-card-price">${item.price}</span>
              <button
                type="button"
                onClick={() => handleAdd(item.id)}
                className={`product-card-btn${added.has(item.id) ? " product-card-btn--added" : ""}`}
              >
                {added.has(item.id) ? "Added" : "Add"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
