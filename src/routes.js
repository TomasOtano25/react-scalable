import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeContainer from "./containers/home/HomeContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact to="/" component={HomeContainer} />
      <Route component={HomeContainer} />
    </Switch>
  );
};

export default Routes;
