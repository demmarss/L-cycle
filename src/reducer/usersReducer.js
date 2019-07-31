import { GET_USER, DELETE_USER, CREATE_USER, GET_LIST_OF_USERS, CREATE_LMS_USER, GET_LMS_USERS} from "../actions/users";

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.userId
      }
    case GET_LIST_OF_USERS:
        return {
          ...state,
          ...action.users
        }
    case GET_LMS_USERS:
        return {
          ...state,
          ...action.users
        }
    case CREATE_LMS_USER:
      return {
        ...action.user
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