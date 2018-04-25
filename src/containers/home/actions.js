import types from "../../actions/actionType";

export const requestTopics = () => {
  return { type: types.REQUEST_TOPICS };
};

export const requestTopicsSucceded = topics => {
  return { type: types.REQUEST_TOPICS_SUCCEDED, topics };
};

export const requestTopicsFailed = message => {
  return { type: types.REQUEST_TOPICS_FAILED, message };
};

export const selectTopic = topic => {
  return { type: types.SELECT_TOPIC, topic };
};

export const toogleDrawer = () => {
  return { type: types.TOOGLE_DRAWER };
};
