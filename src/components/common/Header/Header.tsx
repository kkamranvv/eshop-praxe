import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
import Cart from "./Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="menu">
        <Navigation />

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
          <div className="shopping-cart">
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
