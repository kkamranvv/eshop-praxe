import "./CatalogHeader.css";

const CatalogHeader = () => {
  return (
    <section className="catalog-header">
      <div className="catalog-header-left">
        <p className="catalog-tag">All products</p>
        <h1 className="catalog-title">The catalog.</h1>
        <p className="catalog-description">
          Filter by category, sort by what matters, click anything to learn
          more.
        </p>
      </div>
      <span className="catalog-count">
        20 <span className="catalog-count-label">items</span>
      </span>
    </section>
  );
};

export default CatalogHeader;
