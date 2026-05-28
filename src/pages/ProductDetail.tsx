import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Breadcrumbs from "../components/features/ProductDetail/Breadcrumbs";
import ProductGallery from "../components/features/ProductDetail/ProductGallery";
import ProductInfo from "../components/features/ProductDetail/ProductInfo";
import ProductActions from "../components/features/ProductDetail/ProductActions";
import ProductMeta from "../components/features/ProductDetail/ProductMeta";
import { fetchProduct } from "../utils/api";
import "./ProductDetail.css";
import ReviewItem from "../components/features/ProductDetail/ReviewItem";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) fetchProduct(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return (
      <div>
        <Header />
        <div className="pdp-loading">Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="pdp-wrapper">
        <Breadcrumbs category={product.category} />
        <div className="pdp-content">
          <ProductGallery image={product.image} title={product.title} />
          <div className="pdp-info">
            <ProductInfo
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description}
              rating={product.rating}
            />
            <ProductActions product={product} />
            <ProductMeta id={product.id} category={product.category} />
            <ReviewItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
