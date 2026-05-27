import Header from "../components/common/Header/Header";
import ProductCard from "../components/common/ProductCard/ProductCard";
import CatalogHeader from "../components/features/Catalog/CatalogHeader";
import CategoryFilter from "../components/features/Catalog/CategoryFilter";
import ProductSearch from "../components/features/Catalog/ProductSearch";
import ProductSort from "../components/features/Catalog/ProductSort";
import "./Products.css";

import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <Header />
      <CatalogHeader />
      <div className="catalog-toolbar">
        <CategoryFilter />
        <div className="catalog-toolbar-right">
          <ProductSearch />
          <ProductSort />
        </div>
      </div>
      <ProductCard items={products} />
    </div>
  );
};

export default Products;
