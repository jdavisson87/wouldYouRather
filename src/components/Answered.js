import React from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'


function Answered(props) {
  const { users, question, authedUser, } = props

  let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  let totalOptOne = question.optionOne.votes.length
  let totalOptTwo = question.optionTwo.votes.length

  return(
    <li key={question.id} className='list-group-item col-md-8 center-block poll-detail'>
      <div className='question-info'>
        <span>Author: {users[question.author].name}</span>
        <img
          src={users[question.author].avatarURL}
          alt={`Avatar of ${users[question.author].name}`}
          className='avatar'
        />
        <span className='pull-right'>{formatDate(question.timestamp)}</span>
      </div>
      <div className='options'>
        <h3 className='text-center'>Would you Rather:</h3>
        <div className='option'>
          <p>
            Option One: {props.question.optionOne.text}
            {question.optionOne.votes.includes(authedUser) && (<img
              src={users[authedUser].avatarURL}
              alt={`Avatar of ${users[authedUser].name}`}
              className='avatar pull-right'
            />)}
          </p>
          <div>
            {totalOptOne} {totalOptOne===1 ? <span>vote</span> : <span>votes</span>}
            <span className='pull-right'>
              {((totalOptOne/totalVotes)*100).toFixed(2)}%
            </span>
          </div>

        </div>
        <div className='option'>
          <p>
            Option Two: {props.question.optionTwo.text}
            {question.optionTwo.votes.includes(authedUser) && (<img
              src={users[authedUser].avatarURL}
              alt={`Avatar of ${users[authedUser].name}`}
              className='avatar pull-right'
            />)}
          </p>
          <div>
            {totalOptTwo} {totalOptTwo===1 ? <span>vote</span> : <span>votes</span>}
            <span className='pull-right'>
              {((totalOptTwo/totalVotes)*100).toFixed(2)}%
            </span>
          </div>
        </div>
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
  }
}

export default connect(mapStateToProps)(Answered)
