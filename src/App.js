import React from "react";

import NavBar from "./Components/NavBar";
import FindCity from "./Components/Pages/FindCity";
import FindZip from "./Components/Pages/FindZip";

function App() {
  return (
    <div className="container">
      <NavBar />
      <FindCity />
      <FindZip />
    </div>
  );
}

export default App;
