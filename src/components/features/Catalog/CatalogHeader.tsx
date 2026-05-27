import PageHeader from "../../common/PageHeader/PageHeader";
import "./CatalogHeader.css";

const CatalogHeader = () => {
  return (
    <section className="catalog-header">
      <PageHeader
        tag="ALL PRODUTCS"
        title="The catalog."
        description="Filter by category, sort by what matters, click anything to learn more."
      />

      <span className="catalog-count">
        20 <span className="catalog-count-label">items</span>
      </span>
    </section>
  );
};

export default CatalogHeader;
