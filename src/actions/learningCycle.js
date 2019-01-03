import { createLgroup, receivingLgroups, joinLgroup, gettingLgroup } from '../service/api'

export const GET_GROUP = "GET_GROUP";
export const RECEIVE_LGROUPS = "RECEIVE_LGROUPS";
export const CREATE_LCYCLE = "CREATE_LCYCLE";
export const DELETE_LCYCLE = "DELETE_LCYCLE";
export const UPDATE_LGROUPS = 'UPDATE_LGROUPS'

export function getLGroup(lgroupId) {
  return {
    type: GET_GROUP,
    lgroupId
  };
}

export function receiveLgroups(lgroups) {
  return {
    type: RECEIVE_LGROUPS,
    lgroups
  };
}


export function addLGroup(lgroup) {
  return {
    type: CREATE_LCYCLE,
    lgroup
  };
}

export function deleteLCycle(lCycleTitle) {
    return {
      type: DELETE_LCYCLE,
      lCycleTitle
    };
  }

  export function updateLgroups(lgroup) {
    return {
      type: UPDATE_LGROUPS,
      lgroup
    };
  }



// creating handler that will be invoked in the UI 
export function handleCreateLgroup(lgtitle) {
  return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
    return createLgroup({
      lgtitle,
      token
    })
    // calling action through dispatch and assigning it to username
      .then((lgroup) => dispatch(addLGroup(lgroup)));
  };
}

export function handleJoinLgroup(lgCode){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
    return joinLgroup({
      lgCode,
      token
    })
    // calling action through dispatch and assigning it to username
      .then((lgroup) => dispatch(receiveLgroups(lgroup)));
  };
}


export function handleReceiveLgroups(userId){
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { token} = authedUser? authedUser:{token:""}
  return receivingLgroups({
    userId,
    token
  })
  // calling action through dispatch and assigning it to username
    .then((lgroups) => dispatch(receiveLgroups(lgroups)));
};
}

export function handleGetLgroup(lgroupId) {
  return (dispatch) => {
        
    return gettingLgroup({
      lgroupId
    })
      .then(lgroup => dispatch(getLGroup(lgroup)));
  };
}
