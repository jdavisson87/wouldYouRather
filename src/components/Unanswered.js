import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { handleAddQuestionAnswer } from "../actions/questions";

function Unanswered (props) {
  const { users, question, id, dispatch } = props

  return(
    <li key={props.question.id}>
      <h3 className='text-center'>Would You Rather:</h3>
      <div className='question-info'>
        <span>Author: {users[question.author].name}
          <img
            src={users[question.author].avatarURL}
            alt={`Avatar of ${users[question.author].name}`}
            className='avatar'
          />
        </span>
        <span className='pull-right'>{formatDate(question.timestamp)}</span>
      </div>
      <div className='option'>
        <h4>
          Option One: {props.question.optionOne.text}
        </h4>
        <button className='btn btn-info pull-right' onClick={e =>{
          dispatch(handleAddQuestionAnswer(id, 'optionOne'))
        }}>Vote</button>
      </div>
      <div className='option'>
        <h4>
          Option Two: {props.question.optionTwo.text}
        </h4>
        <button className='btn btn-info pull-right' onClick={e =>{
          dispatch(handleAddQuestionAnswer(id, 'optionTwo'))
        }}>Vote</button>
      </div>
    </li>
  )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users,
    id
  }
}

export default connect(mapStateToProps)(Unanswered)
