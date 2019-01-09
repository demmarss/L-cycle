import { GET_TASK, CREATE_TASK, DELETE_TASK, RECEIVE_TASKS, ADD_SCORE_HISTORY} from "../actions/tasks";

export default function task(state = [], action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks.filter(x => x) 
    case ADD_SCORE_HISTORY:
      return action.tasks
       
    case GET_TASK:
      return {
        ...state,
        ...action.taskId
      }

    case DELETE_TASK:
      return state.filter(x => x._id !== action.task._id);

    case CREATE_TASK:
      return [...state, action.task]
    default:
      return state;
  }
}
