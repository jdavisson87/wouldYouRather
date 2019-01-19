import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

// const AUTHED_ID = 'sarahedo'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions })=> {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        //dispatch(setAuthedUser(AUTHED_ID)) //will change once when are selecting the auth user
      })
  }
}
