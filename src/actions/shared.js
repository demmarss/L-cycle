import {getUsers} from './users.js'
import {setAuthedUser} from './authUser'
import {getLCycle} from './learningCycle'

// let AUTHED_ID = 

export function handleInitialData () {
    return (dispatch) => {
      return getInitialData()
        .then(({ usersId, LCyclesId }) => {
          dispatch(getUsers(usersId));
          dispatch(getLCycle(LCyclesId));
        //   dispatch(setAuthedUser(AUTHED_ID));
        });
    };
  }