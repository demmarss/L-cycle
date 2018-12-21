export const GET_LCYCLE = "GET_LCYCLE";
export const CREATE_LCYCLE = "CREATE_LCYCLE";
export const DELETE_LCYCLE = "DELETE_LCYCLE";

export function getLCycle(lCycleId) {
  return {
    type: GET_LCYCLE,
    lCycleId
  };
}

export function createLCycle(userId, lCycleTitle) {
  return {
    type: CREATE_LCYCLE,
    userId,
    lCycleTitle
  };
}

export function deleteLCycle(lCycleTitle) {
    return {
      type: DELETE_LCYCLE,
      lCycleTitle
    };
  }