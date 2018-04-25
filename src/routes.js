import React from "react";
import { Route, Switch } from "react-router";

import HomeContainer from "./containers/home/HomeContainer";

import LinkListContainer from "./containers/linkList/LinkListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="*" component={HomeContainer} />
    </Switch>
  );
};

export const RoutesHome = () => {
  return (
    <Route exact path="/topics/:topicName" component={LinkListContainer} />
  );
};

export default Routes;
