import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";

const navItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Products", href: "/products" },
  { id: 3, label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="nav-menu">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className={`nav-link${pathname === item.href ? " nav-link--active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
