import React from "react";
import "./index.css";

// Components

const SelectInput = ({ setChoice, choice, setId, setPage }) => {
  const handleChange = (event) => {
    setChoice(event.target.value);
    setId(0);
    setPage(1);
  };

  return (
    <>
      <select value={choice} onChange={handleChange}>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
        <option value="species">species</option>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
      </select>
    </>
  );
};

export default SelectInput;
