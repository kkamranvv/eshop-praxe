import { useState } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
import Cart from "./Cart/Cart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <div className="menu">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={menuOpen ? "nav-open" : "nav-closed"}>
          <Navigation />
        </div>

        {/* <div className="button-wrapper home">
            <div className="button-hover">
                <h2>Home</h2>
            </div>
        </div>
        <div className="button-wrapper products">
            <div className="button-hover">
                <h2>Products</h2>
            </div>
        </div>
        <div className="button-wrapper contact">
            <div className="button-hover">
                <h2>Contact</h2>
            </div>
        </div> */}
        <div className="search-wrapper">
          <SearchBar />
        </div>
        <div className="shopping-cart">
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
