import { createUser, gettingUser } from '../service/api'

export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";

export function getUser(userId) {
  return {
    type: GET_USER,
    userId
  };
}

export function addUser(username) {
  return {
    type: CREATE_USER,
    username
  };
}

export function deleteUser(userId) {
    return {
      type: DELETE_USER,
      userId
    };
  }

// creating handler that will be invoked in the UI 
export function handleCreateUser(username, password) {
    return (dispatch) => {
      // invoke api method    
      return createUser({
        username,
        password
      })
      // calling action through dispatch and assigning it to username
        .then(({username}) => dispatch(addUser(username)));
    };
  }

export function handleGetUser(userId) {
    return (dispatch) => {
          
      return gettingUser({
        userId
      })
        .then(({userId}) => dispatch(getUser(userId)));
    };
  }



/*

user = {
  firstname:
  lastname:
  username (isRequired):
  e-mail:
  password (isRequired):
  phoneNumber:
}

lgroup = {
  author (Current user id):
  code:
  groupName: 
  members[Array of usersId]: 
  tasks [Array of taskIds]:
}

Task ={
  id: 787
  topic:
  author (Ademola):
  questions [Array of objs{}]:
  scoreHistory: [{userId: Score, correct: [questionIndex]] 
}


*/