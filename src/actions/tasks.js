export const GET_TASK = "GET_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export function getTasks(taskId) {
  return {
    type: GET_TASK,
    taskId
  };
}

export function createLCycle(userId, task) {
    return {
      type: CREATE_TASK,
      userId,
      task
    };
  }

export function deletetask(taskId) {
    return {
      type: DELETE_TASK,
      taskId
    };
  }