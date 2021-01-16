import React from "react";
import "./index.css";

const SearchInput = ({ searchItem, setSearchItem }) => {
  const handleSearch = (ev) => {
    setSearchItem(ev.target.value);
  };

  return (
    <>
      <input
        aria-label="search-label"
        onChange={handleSearch}
        type="text"
        value={searchItem}
        placeholder="Search in Star Wars"
      />
    </>
  );
};

export default SearchInput;
