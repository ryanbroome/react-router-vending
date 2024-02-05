import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Chips from "./Chips";
import Drinks from "./Drinks";
import Cookies from "./Cookies";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <h1>VENDING MACHINE</h1>
      <BrowserRouter>
        <NavBar />

        <Route exact path="/chips">
          <Chips />
        </Route>

        <Route exact path="/drinks">
          <Drinks />
        </Route>

        <Route exact path="/cookies">
          <Cookies />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
