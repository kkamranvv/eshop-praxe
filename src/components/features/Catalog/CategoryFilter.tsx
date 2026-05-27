import { useState } from "react";
import "./CategoryFilter.css";

const categories = ["All", "Men's Clothing", "Jewelery", "Electronics", "Women's Clothing"];

const CategoryFilter = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-btn${active === cat ? " category-btn--active" : ""}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
