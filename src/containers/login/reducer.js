import types from "../../actions/actionType";
import initialState from "../../reducers/initialState";

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case types.LOGIN:
      return action.email;

    default:
      return state;
  }
};

export { loginReducer };
