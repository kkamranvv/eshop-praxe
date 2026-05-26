import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchIcon className="search-bar__icon" />
      <input type="text" placeholder="Search products" />
    </div>
  );
};

export default SearchBar;
