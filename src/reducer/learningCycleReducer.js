import { GET_GROUP, DELETE_LCYCLE, CREATE_LCYCLE, RECEIVE_LGROUPS, DELETE_TASK_FROM_LCYCLE} from "../actions/learningCycle";


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
      return state.filter(({ _id }) => _id !== action.lgroupId)

    case DELETE_TASK_FROM_LCYCLE:
      return [...state].map(group=> group.task.filter(taskId => taskId !== action.task._id))
    
    case CREATE_LCYCLE:
      return [...state, action.lgroup ]
    default:
      return state;
  }
}
