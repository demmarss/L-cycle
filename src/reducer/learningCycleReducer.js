import { GET_GROUP, DELETE_LCYCLE, CREATE_LCYCLE, RECEIVE_LGROUPS} from "../actions/learningCycle";


export default function learningCycle(state = [], action) {
  switch (action.type) {
    case RECEIVE_LGROUPS:
      return action.lgroups 
    case GET_GROUP:
      return {
        ...state,
        ...action.lCycleId
      }
    case DELETE_LCYCLE:
      return action.lCycleId;

    case CREATE_LCYCLE:
      return [...state, action.lgroup ]
    default:
      return state;
  }
}
