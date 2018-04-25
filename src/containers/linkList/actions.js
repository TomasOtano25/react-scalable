import types from "../../actions/actionType";

export const requestLinkSucceded = links => {
  return { type: types.REQUEST_LINKS_SUCCEDED, links };
};

export const requestLinkFailed = message => {
  return { type: types.REQUEST_LINKS_SUCCEDED, message };
};

export const requestLinks = topicName => {
  return { type: types.REQUEST_LINKS, topicName };
};
