import './Header.css'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header className="header">
        <Logo />
      <div className="menu">
        <div className="button-wrapper home">
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
        </div>
        <div className="search-wrapper">
            <div className="search-icon">
                <div className="search-hover">
                    <input type="text" placeholder="Search..." />
                    <div className="search-icon">
                        <h2>Search</h2>
                    </div>
                </div>
            </div>
                <div className="shopping-cart">
                    <div className="cart-hover">
                        <h2>Cart</h2>
                    </div>
                </div>
        </div>
      </div>
    </header>
  )
}

export default Header