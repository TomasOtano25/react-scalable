import types from "../../actions/actionType";
import initialState from "../../reducers/initialState";

const topicReducer = (state = initialState.topics, action) => {
  switch (action.type) {
    case types.REQUEST_TOPICS_SUCCEDED:
      return action.topics;
    default:
      return state;
  }
};

const selectTopic = (state = initialState.selectedTopic, action) => {
  switch (action.type) {
    case types.SELECT_TOPIC:
      return Object.assign({}, state, action.topic);
    default:
      return state;
  }
};

const toogleDrawer = (state = initialState.toogleDrawer, action) => {
  switch (action.type) {
    case types.TOOGLE_DRAWER:
      return !state;
    default:
      return state;
  }
};

const routerLocation = (state = initialState.routerLocation, action) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return action.payload.pathname;

    default:
      return state;
  }
};

export { topicReducer, selectTopic, toogleDrawer, routerLocation };
