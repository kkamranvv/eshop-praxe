import "./ProductSearch.css";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const ProductSearch = ({ value, onChange }: Props) => (
  <input
    type="text"
    className="product-search"
    placeholder="Filter by name"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default ProductSearch;
