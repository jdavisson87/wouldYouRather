import { RECEIVE_USERS/*, ADD_USER*/ } from '../actions/users'

export default function users (state= {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

      // To use for adding a new user

      // case ADD_USER :
      //   const { user } = action
      //   return {
      //     ...state,
      //     [action.user.id] : user,
      //   }
    default :
      return state
  }
}
