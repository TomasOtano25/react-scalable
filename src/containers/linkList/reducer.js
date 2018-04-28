import types from "../../actions/actionType";
import initialState from "../../reducers/initialState";

const linkListContainetReducer = (state = initialState.links, action) => {
  //console.log(action);
  switch (action.type) {
    case types.REQUEST_LINKS_SUCCEDED:
      return action.links;
    case types.ADD_LINK_SUCCESS:
      return [...state, Object.assign({}, action.link)];
    //return [...state, Object.assign({}, action.links)];
    default:
      return state;
  }
};

/*const addLink = (state = initialState.links, action.link) => {
  switch (action.types) {
    case types.ADD_LINK_SUCCESS:
      break;

    default:
      return state;
  }
};*/

export { linkListContainetReducer };
