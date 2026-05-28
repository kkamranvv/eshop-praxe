import Header from "../components/common/Header/Header";
import ProductCard from "../components/common/ProductCard/ProductCard";
import CatalogHeader from "../components/features/Catalog/CatalogHeader";
import CategoryFilter from "../components/features/Catalog/CategoryFilter";
import ProductSearch from "../components/features/Catalog/ProductSearch";
import ProductSort from "../components/features/Catalog/ProductSort";
import "./Products.css";

import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import Footer from "../components/common/Footer/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  let filtered = [...products];

  if (category !== "All")
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );

  if (search.trim())
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );

  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "name")
    filtered.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <Header />
      <CatalogHeader />
      <div className="catalog-toolbar">
        <CategoryFilter value={category} onChange={setCategory} />
        <div className="catalog-toolbar-right">
          <ProductSearch value={search} onChange={setSearch} />
          <ProductSort value={sort} onChange={setSort} />
        </div>
      </div>
      <ProductCard items={filtered} />
      <Footer />
    </div>
  );
};

export default Products;
