import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import {
  topicReducer as topics,
  selectTopic as selected,
  toogleDrawer as isDrawerOpen,
  routerLocation
} from "../containers/home/reducer";

import { linkListContainetReducer as links } from "../containers/linkList/reducer";

const reducers = { topics, selected, links, isDrawerOpen, routerLocation };

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

export default rootReducer;
