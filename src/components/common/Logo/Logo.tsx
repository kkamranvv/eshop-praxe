import './Logo.css'
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <button>
          <span className="logo-praxe">praxe</span>
          <span className="logo-shop">shop</span>
        </button>
      </Link>
    </div>
  )
}

export default Logo
