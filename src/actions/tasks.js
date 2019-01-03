import { createTask, gettingTask, receivingTasks } from '../service/api'
import { receiveLgroups } from './learningCycle'

export const GET_TASK = "GET_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";

export function getTask(taskId) {
  return {
    type: GET_TASK,
    taskId
  };
}

export function addTask(task) {
    return {
      type: CREATE_TASK,
      task
    };
  }


export function receiveTasks(tasks) {
    return {
      type: RECEIVE_TASKS,
      tasks
    };
  }
export function deletetask(taskId) {
    return {
      type: DELETE_TASK,
      taskId
    };
  }



  export function handleCreateTask(task, lgroupId) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createTask({
      task,
      token,
      lgroupId
    })
      .then
        (task => dispatch(addTask({task})), 
        (lgroups => dispatch(receiveLgroups({lgroups}))))
    };
  }

  // Receive Tasks list of a user
  export function handleReceiveTasks(userId){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
    return receivingTasks({
      userId,
      token
    })
    // calling action through dispatch and assigning it to username
      .then((tasks) => dispatch(receiveTasks(tasks)));
  };
  }

export function handleGetTask(taskId) {
    return (dispatch) => {
          
      return gettingTask({
        taskId
      })
        .then(({taskId}) => dispatch(getTask(taskId)));
    };
  }