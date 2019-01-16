export const RECEIVE_USERS = 'RECEIVE_USERS'
//export const ADD_USER = 'ADD_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

// for adding an addUser function

// export function addUser (users) {
//   return {
//     type: ADD_USER,
//     users,
//   }
// }
