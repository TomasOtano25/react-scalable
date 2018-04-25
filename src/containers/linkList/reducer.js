import types from "../../actions/actionType";
import initialState from "../../reducers/initialState";

const linkListContainetReducer = (state = initialState.links, action) => {
  //console.log(action);
  switch (action.type) {
    case types.REQUEST_LINKS_SUCCEDED:
      return action.links;
    //return [...state, Object.assign({}, action.links)];
    default:
      return state;
  }
};

export { linkListContainetReducer };
