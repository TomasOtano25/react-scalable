import types from "../../actions/actionType";

export const cancelAdd = () => {
  return { type: types.CANCEL_ADD };
};

export const addLink = link => {
  return {
    type: types.ADD_LINK,
    link
  };
};

export const addLinkSuccess = () => {
  return { type: types.ADD_LINK_SUCCESS };
};

export const addLinkFailed = () => {
  return { type: types.ADD_LINK_FAILED };
};
