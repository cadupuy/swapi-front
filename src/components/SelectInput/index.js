import React from "react";
import "./index.css";

// Components

const SelectInput = ({ setChoice, choice, setId, setPage, setSearchItem }) => {
  const handleChange = (event) => {
    setId(0);
    setPage(1);
    setChoice(event.target.value);
  };

  return (
    <div className="select">
      <select value={choice} onChange={handleChange}>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
        <option value="species">species</option>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
      </select>
      <span class="focus"></span>
    </div>
  );
};

export default SelectInput;
