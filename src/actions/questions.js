export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTIONS,
    question
  }
}