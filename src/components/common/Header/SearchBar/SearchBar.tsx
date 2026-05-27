import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

interface Product {
  id: number;
  title: string;
  image: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const filtered = products
      .filter((p) => p.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    setSuggestions(filtered);
    setOpen(true);
  };

  const handleSelect = (title: string) => {
    setQuery(title);
    setSuggestions([]);
    setOpen(false);
  };

  return (
    <div
      className="search-bar"
      onBlur={() => setTimeout(() => setOpen(false), 150)}
    >
      <SearchIcon className="search-bar__icon" />
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={handleChange}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
      />
      {open && suggestions.length > 0 && (
        <ul className="search-bar__dropdown">
          {suggestions.map((product) => (
            <li
              key={product.id}
              onMouseDown={() => handleSelect(product.title)}
            >
              <img src={product.image} alt={product.title} />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setSuggestions([]);
            setOpen(false);
            return;
        }

        const filtered = products
            .filter(p => p.title.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 5);

        setSuggestions(filtered);
        setOpen(true);
    };

    const handleSelect = (title) => {
        setQuery(title);
        setSuggestions([]);
        setOpen(false);
    };

    return (
        <div className="search-bar" onBlur={() => setTimeout(() => setOpen(false), 150)}>
            <SearchIcon className="search-bar__icon" />
            <input
                type="text"
                placeholder="Search products"
                value={query}
                onChange={handleChange}
                onFocus={() => suggestions.length > 0 && setOpen(true)}
            />
            {open && suggestions.length > 0 && (
                <ul className="search-bar__dropdown">
                    {suggestions.map(product => (
                        <li key={product.id} onMouseDown={() => handleSelect(product.title)}>
                            <img src={product.image} alt={product.title} />
                            <span>{product.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;