import "./ProductGallery.css";

interface Props {
  image: string;
  title: string;
}

const ProductGallery = ({ image, title }: Props) => (
  <div className="pdp-image-wrap">
    <img src={image} alt={title} className="pdp-image" />
  </div>
);

export default ProductGallery;
