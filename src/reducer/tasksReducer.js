import { GET_TASK, CREATE_TASK, DELETE_TASK, RECEIVE_TASKS} from "../actions/tasks";

export default function task(state = [], action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks 
    case GET_TASK:
      return {
        ...state,
        ...action.taskId
      }

    case DELETE_TASK:
      return action.taskId;
    case CREATE_TASK:
      return [...state, action.task]
    default:
      return state;
  }
}