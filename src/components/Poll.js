import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

class Poll extends Component {
  render() {
    const { users, authedUser, question, id } = this.props
    console.log(this.props)

    return(
      <Link
        to={`/question/${id}`}
        className='link'
        >
        <li className='poll-question center-block col-md-8 list-group-item'>
          <img
            src={users[question.author].avatarURL}
            alt={`Avatar of ${users[question.author].name}`}
            className='avatar pull-right'
          />
          <h3>Would You Rather: </h3>
          <p>Option 1: {question.optionOne.text}</p>
          <p>Option 2: {question.optionTwo.text}</p>
        </li>
      </Link>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
    users
  }
}

export default connect(mapStateToProps)(Poll)
