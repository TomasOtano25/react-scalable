import types from "../../actions/actionType";

export const addLinkCancelled = () => {
  return { type: types.ADD_LINK_CANCELLED };
};

export const addLink = link => {
  return {
    type: types.ADD_LINK,
    link
  };
};

export const addLinkSuccess = link => {
  return { type: types.ADD_LINK_SUCCESS, link };
};

export const addLinkFailed = (link, message) => {
  return { type: types.ADD_LINK_FAILED, link, message };
};
