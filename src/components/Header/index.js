import React from "react";
import "./index.css";

// Components
import SearchInput from "../SearchInput";
import ButtonYellow from "../ButtonYellow";

// Images
import Logo from "../../assets/img/logo.png";

const Header = ({ setChoice, choice, setId }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <img onClick={handleClick} src={Logo} alt="logo" />
        <SearchInput choice={choice} setChoice={setChoice} setId={setId} />
        <ButtonYellow />
      </div>
    </header>
  );
};

export default Header;
