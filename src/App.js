import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Containers
import Home from "./containers/Home";

// Components
import Header from "./components/Header";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowRight, faArrowLeft);

function App() {
  // Filter to choose between all categories
  const [choice, setChoice] = useState("people");
  // id of item. First item displayed is index 0
  const [id, setId] = useState(0);

  return (
    <Router>
      <Header setChoice={setChoice} choice={choice} setId={setId} />
      <Route path="/">
        <Home choice={choice} id={id} setId={setId} />
      </Route>
    </Router>
  );
}

export default App;
