export const REVCEIVE_USERS = 'REVCEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
