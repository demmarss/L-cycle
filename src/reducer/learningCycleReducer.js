import { GET_LCYCLE, DELETE_LCYCLE, CREATE_LCYCLE} from "../actions/learningCycle";

export default function learningCycle(state = {}, action) {
  switch (action.type) {
    case GET_LCYCLE:
      return {
        ...state,
        ...action.lCycleId
      }

    case DELETE_LCYCLE:
      return action.lCycleId;

    case CREATE_LCYCLE:
      return {
        ...action.userId, 
        ...action.lCycleTitle
      };
    default:
      return state;
  }
}