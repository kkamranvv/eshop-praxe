import "./ProductSort.css";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const ProductSort = ({ value, onChange }: Props) => (
  <div className="product-sort">
    <span className="product-sort-label">Sort</span>
    <select
      className="product-sort-select"
      title="Sort products"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="featured">Featured</option>
      <option value="price-asc">Price: low to high</option>
      <option value="price-desc">Price: high to low</option>
      <option value="name">Name</option>
    </select>
  </div>
);

export default ProductSort;
