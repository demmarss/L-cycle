import { GET_USER, DELETE_USER, CREATE_USER} from "../actions/users";

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.userId
      }

    case DELETE_USER:
      return action.userId;

    case CREATE_USER:
      return {
        ...action.username, 
        ...action.password
      };
    default:
      return state;
  }
}