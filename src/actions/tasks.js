import { createTask, gettingTask, receivingTasks, addingScoreHistoryToTasks, deletingTask } from '../service/api'
import { receiveLgroups, deleteTaskInLgroup } from './learningCycle'

export const GET_TASK = "GET_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const ADD_SCORE_HISTORY ="ADD_SCORE_HISTORY"

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


export function addScoreHistory(tasks) {
    return {
      type: ADD_SCORE_HISTORY,
      tasks
    };
  }
export function deleteTask(task) {
    return {
      type: DELETE_TASK,
      task
    };
  }

// handler for deleting a learning group
export function handleDeleteTask(taskId){
  
  return (dispatch, getState)=>{
    const { authedUser }= getState();
    const { token } = authedUser? authedUser:{todken:""}
    return deletingTask({
      taskId,
      token
    })
    .then((task)=> { 
      dispatch(deleteTask(task))
      dispatch(deleteTaskInLgroup(task))
      }) // this is the deleted task
  }
}
// handler for creating task
  export function handleCreateTask(task, lgroupId) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createTask({
      task,
      token,
      lgroupId
       })
      .then(({task, lgroups}) => {
        dispatch(addTask(task));
        dispatch(receiveLgroups(lgroups))
      })
    }
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

    // Receive Tasks list of a user
    export function handleAddScoreHistory(taskyId, timeDuration, correctedQuestionArray){
      return (dispatch, getState) => {
        const { authedUser } = getState();
        const { token } = authedUser? authedUser:{token:""}
   
      return addingScoreHistoryToTasks({
        taskyId,
        timeDuration,
        correctedQuestionArray,
        token
        })
      // calling action through dispatch and assigning it to username
        .then((tasks) => dispatch(addScoreHistory(tasks)));
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

