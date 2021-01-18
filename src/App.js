import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";

// Containers
import Home from "./containers/Home";

// Components
import Header from "./components/Header";
import ModalSignUp from "./components/ModalSignUp";
import Modal from "./components/Modal";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowRight, faArrowLeft, faTimes);

function App() {
  //  Search Input to filter with text
  const [searchItem, setSearchItem] = useState("");
  // Filter to choose between all categories
  const [choice, setChoice] = useState("vehicles");
  // id of item. First item displayed is index 0
  const [id, setId] = useState(0);
  const [page, setPage] = useState(1);

  const [isModal, setIsModal] = useState(false);
  const [isModalSignUp, setIsModalSignUp] = useState(false);
  const [token, setToken] = useState(Cookies.get("tokenUser") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("tokenUser", tokenToSet, { expires: 10 });
      setToken(tokenToSet);
    } else {
      Cookies.remove("tokenUser");
      setToken(null);
    }
  };

  return (
    <Router>
      {isModal === true && (
        <Modal
          setIsModal={setIsModal}
          setUser={setUser}
          setIsModalSignUp={setIsModalSignUp}
        />
      )}

      {isModalSignUp === true && (
        <ModalSignUp
          setIsModalSignUp={setIsModalSignUp}
          setUser={setUser}
          setIsModal={setIsModal}
        />
      )}

      <Header
        setIsModal={setIsModal}
        setUser={setUser}
        token={token}
        setChoice={setChoice}
        choice={choice}
        setId={setId}
        setSearchItem={setSearchItem}
        setPage={setPage}
      />
      <Route path="/">
        <Home
          choice={choice}
          id={id}
          setId={setId}
          searchItem={searchItem}
          setPage={setPage}
          page={page}
        />
      </Route>
    </Router>
  );
}

export default App;
