import "./ProductSort.css";

const ProductSort = () => {
  return (
    <div className="product-sort">
      <span className="product-sort-label">Sort</span>
      <select className="product-sort-select" title="Sort products">
        <option value="featured">Featured</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default ProductSort;
