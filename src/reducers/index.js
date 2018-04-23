import { combineReducers } from "redux";

import {
  topicReducer as topics,
  selectTopic as selected
} from "../containers/home/reducer";

import { linkListContainetReducer as links } from "../containers/linkList/reducer";

const rootReducer = combineReducers({
  topics,
  selected,
  links
});

export default rootReducer;
