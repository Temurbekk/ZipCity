import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FindCity from "./Pages/FindCity";
import FindZip from "./Pages/FindZip";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/zip" component={FindZip} />
      <Route path="/city" component={FindCity} />
    </Switch>
  );
}

export default Routes;
