import Logo from "../Logo/Logo";
import Navigation from "../Header/Navigation/Navigation";
import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <Link to={"/"}>
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <div className="navigation">
          <Navigation />
        </div>
        <div className="copyright">
          <h3>© 2026 · Praxe project · React + Fake Store API</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
