import "./PageHeader.css";

interface PageHeaderProps {
  tag: string;
  title: string;
  description: string;
}

const PageHeader = ({ tag, title, description }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <p className="page-header-tag">{tag}</p>
      <h1 className="page-header-title">{title}</h1>
      <p className="page-header-description">{description}</p>
    </div>
  );
};

export default PageHeader;
