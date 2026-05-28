import "./CategoryFilter.css";

const categories = ["All", "Men's Clothing", "Jewelery", "Electronics", "Women's Clothing"];

interface Props {
  value: string;
  onChange: (cat: string) => void;
}

const CategoryFilter = ({ value, onChange }: Props) => (
  <div className="category-filter">
    {categories.map((cat) => (
      <button
        key={cat}
        type="button"
        className={`category-btn${value === cat ? " category-btn--active" : ""}`}
        onClick={() => onChange(cat)}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
