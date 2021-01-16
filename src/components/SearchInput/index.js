import React from "react";
import "./index.css";

// Components

const SearchBar = ({ setChoice, choice, setId }) => {
  const handleChange = (event) => {
    setChoice(event.target.value);
    setId(0);
  };

  return (
    <div className="search-bar">
      <select value={choice} onChange={handleChange}>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
        <option value="species">species</option>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
      </select>
    </div>
  );
};

export default SearchBar;
