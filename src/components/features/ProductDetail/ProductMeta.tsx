import "./ProductMeta.css";

interface Props {
  id: number;
  category: string;
}

const ProductMeta = ({ id, category }: Props) => {
  const sku = `PRX-${String(id).padStart(4, "0")}`;

  return (
    <div className="pdp-meta">
      <div className="pdp-meta-item">
        <span className="pdp-meta-label">SKU</span>
        <span className="pdp-meta-value">{sku}</span>
      </div>
      <div className="pdp-meta-item">
        <span className="pdp-meta-label">CATEGORY</span>
        <span className="pdp-meta-value">{category}</span>
      </div>
      <div className="pdp-meta-item">
        <span className="pdp-meta-label">SHIPS</span>
        <span className="pdp-meta-value">Within 48 hours from Prague</span>
      </div>
      <div className="pdp-meta-item">
        <span className="pdp-meta-label">RETURNS</span>
        <span className="pdp-meta-value">30 days, prepaid</span>
      </div>
    </div>
  );
};

export default ProductMeta;
