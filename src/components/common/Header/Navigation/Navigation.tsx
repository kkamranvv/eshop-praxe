import { useState } from "react";

import "./Navigation.css";

const navItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Products", href: "/products" },
  { id: 3, label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <nav className="nav-menu">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`nav-link${activeId === item.id ? " nav-link--active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveId(item.id);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
