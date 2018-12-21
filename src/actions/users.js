export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export function getUsers(userId) {
  return {
    type: GET_USER,
    userId
  };
}

export function createUser(username, password) {
  return {
    type: CREATE_USER,
    username,
    password
  };
}

export function deleteUser(userId) {
    return {
      type: DELETE_USER,
      userId
    };
  }