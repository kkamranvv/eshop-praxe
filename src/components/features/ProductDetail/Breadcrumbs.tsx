import { useNavigate } from "react-router-dom";
import "./Breadcrumbs.css";

interface Props {
  category: string;
}

const Breadcrumbs = ({ category }: Props) => {
  const navigate = useNavigate();

  return (
    <nav className="pdp-breadcrumb">
      <span className="pdp-breadcrumb-link" onClick={() => navigate("/")}>home</span>
      <span> / </span>
      <span className="pdp-breadcrumb-link" onClick={() => navigate("/products")}>products</span>
      <span> / </span>
      <span>{category}</span>
    </nav>
  );
};

export default Breadcrumbs;
