import { GET_TASK, CREATE_TASK, DELETE_TASK} from "../actions/tasks";

export default function task(state = {}, action) {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        ...action.taskId
      }

    case DELETE_TASK:
      return action.taskId;

    case CREATE_TASK:
      return {
        ...action.userId, 
        ...action.task
      };
    default:
      return state;
  }
}