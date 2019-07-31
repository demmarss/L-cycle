import { createUser, gettingUser, gettingListOfUsers, createLMSUser, gettingLmsUsers } from '../service/api'

export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_LIST_OF_USERS="GET_LIST_OF_USERS";
export const CREATE_LMS_USER = "CREATE_LMS_USER"
export const GET_LMS_USERS = "GET_LMS_USERS"

export function getUser(userId) {
  return {
    type: GET_USER,
    userId
  };
}

export function getListOfUsers(users) {
  return {
    type: GET_LIST_OF_USERS,
    users
  };
}

export function addUser(username) {
  return {
    type: CREATE_USER,
    username
  };
}

export function addLMSUser(user) {
  return {
    type: CREATE_LMS_USER,
    user
  };
}

export function getLmsUsers(users) {
  return {
    type: GET_LMS_USERS,
    users
  };
}


export function deleteUser(userId) {
    return {
      type: DELETE_USER,
      userId
    };
  }

// creating handler that will be invoked in the UI 
export function handleCreateUser(username, password, role) {
    return (dispatch) => {
      // invoke api method    
      return createUser({
        username,
        password,
        role
      })
      // calling action through dispatch and assigning it to username
        .then(({username}) => dispatch(addUser(username)));
    };
  }

  // LMS user creation 
  export function handleCreateLMSUser(formData) {
    return (dispatch) => {
      // invoke api method    
      return createLMSUser({
        formData
      })
      // calling action through dispatch and assigning it to username
        .then(({user}) => dispatch(addLMSUser(user)));
    };
  }
  

  export function handleGetLMSUsers() {
    return (dispatch) => {
          
      return gettingLmsUsers({
      })
        .then(({users}) => dispatch(getLmsUsers(users)));
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

  export function handlingGetListOfUsers(userIdArray) {
    return (dispatch) => {
          
      return gettingListOfUsers({
        userIdArray
      })
        .then((users) => dispatch(getListOfUsers(users)));
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