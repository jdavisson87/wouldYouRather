import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

function Poll(props){

  const { users, question, id } = props

  return(
    <Link
      to={`/question/${id}`}
      className='link col-md-8 center-block'
      >
      <li className='poll-question center-block list-group-item'>
        <div className='pull-right'>
          <span>Asked by {users[question.author].name}</span>
          <p>{formatDate(question.timestamp)}</p>
          <img
            src={users[question.author].avatarURL}
            alt={`Avatar of ${users[question.author].name}`}
            className='avatar'
          />
        </div>
        <h3>Would You Rather: </h3>
        <p>Option 1: {question.optionOne.text}</p>
        <p>Option 2: {question.optionTwo.text}</p>
      </li>
    </Link>
  )
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]

  return {
    question,
    users
  }
}

export default connect(mapStateToProps)(Poll)
