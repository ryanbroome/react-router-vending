import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route exact path="/chips" element={<Chips />}>
            {/* <Chips /> */}
          </Route>

          <Route exact path="/drinks" element={<Drinks />}>
            {/* <Drinks /> */}
          </Route>

          <Route exact path="/cookies" element={<Cookies />}>
            {/* <Cookies /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
