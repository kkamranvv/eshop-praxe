import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../../../utils/api";
import "./Stats.css";

const Stats = () => {
  const [productCount, setProductCount] = useState<number | null>(null);
  const [categoryCount, setCategoryCount] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts().then((res) => setProductCount(res.data.length));
    fetchCategories().then((res) => setCategoryCount(res.data.length));
  }, []);

  return (
    <div className="stats">
      <div className="stats-item">
        <span className="stats-value">{productCount}</span>
        <span className="stats-label">Items in stock</span>
      </div>
      <div className="stats-item">
        <span className="stats-value">{categoryCount}</span>
        <span className="stats-label">Categories</span>
      </div>
      <div className="stats-item">
        <span className="stats-value">24 h</span>
        <span className="stats-label">Average ship time</span>
      </div>
    </div>
  );
};

export default Stats;
