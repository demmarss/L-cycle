export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthedUser(userId) {
  return {
    type: SET_AUTHED_USER,
    userId
  };
}

export function logoutUser(userId) {
  return {
    type: LOGOUT_USER,
    userId
  };
}