import React from "react";
import "./index.css";

// Components
import SelectInput from "../SelectInput";
import ButtonYellow from "../ButtonYellow";
import SearchInput from "../SearchInput";

// Images
import Logo from "../../assets/img/logo.png";

const Header = ({
  setChoice,
  choice,
  setId,
  setIsModal,
  setUser,
  token,
  searchItem,
  setSearchItem,
  setPage,
}) => {
  const handleLogin = () => {
    setIsModal(true);
  };

  const handleUser = () => {
    setUser(null);
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className="container">
        <img onClick={handleClick} src={Logo} alt="logo" />

        <div className="search-bar">
          <SelectInput
            choice={choice}
            setChoice={setChoice}
            setId={setId}
            setPage={setPage}
          />
          <SearchInput searchItem={searchItem} setSearchItem={setSearchItem} />
        </div>

        {token ? (
          <ButtonYellow func={handleUser} title="Logout" />
        ) : (
          <ButtonYellow func={handleLogin} title="Login" />
        )}
      </div>
    </header>
  );
};

export default Header;
