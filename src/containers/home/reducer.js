import types from "../../actions/actionType";
import initialState from "../../reducers/initialState";

const topicReducer = (state = initialState.topics, action) => {
  switch (action.type) {
    case types.REQUEST_TOPICS_SUCCEDED:
      //return state.merge(Map(action.topics));
      //return state.setIn(["topics"], action.topics);
      //state.set("topics", action.topics);
      return action.topics;
    default:
      return state;
  }
};

const selectTopic = (state = initialState.selectedTopic, action) => {
  //console.log(action);
  switch (action.type) {
    case types.SELECT_TOPIC:
      return Object.assign({}, state, action.topic);
    default:
      return state;
  }
};

export { topicReducer, selectTopic };
