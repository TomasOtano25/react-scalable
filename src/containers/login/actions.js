import types from "../../actions/actionType";

export const login = email => {
  return { type: types.LOGIN, email };
};

export const cancelLogin = () => {
  return { type: types.CANCEL_LOGIN };
};
