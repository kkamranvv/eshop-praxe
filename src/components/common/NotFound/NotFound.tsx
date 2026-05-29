import { Link } from "react-router-dom";
import "./NotFound.css";

interface NotFoundProps {
  title?: string;
  description?: string;
  linkTo?: string;
  linkLabel?: string;
}

const NotFound = ({
  title = "Not found",
  description,
  linkTo = "/",
  linkLabel = "Go back",
}: NotFoundProps) => {
  return (
    <div className="not-found">
      <span className="not-found-code">404</span>
      <h2 className="not-found-title">{title}</h2>
      {description && <p className="not-found-desc">{description}</p>}
      <Link to={linkTo} className="not-found-link">
        {linkLabel}
      </Link>
    </div>
  );
};

export default NotFound;
