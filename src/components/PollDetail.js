import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class PollDetail extends Component {
  render() {
    const { users,
      authedUser,
      question,
      totalVotes,
      totalOptOne,
      totalOptTwo, } = this.props


    if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){
      return(
        <li key={question.id} className='list-group-item col-md-8 center-block poll-detail'>
          <div className='question-info'>
            <span>Author: {question.author}</span>
            <span className='pull-right'>{formatDate(question.timestamp)}</span>
          </div>
          <div className='options'>
            <h3 className='text-center'>Would you Rather:</h3>
            <div className='option'>
              <p>
                Option One: {this.props.question.optionOne.text}
                {question.optionOne.votes.includes(authedUser) && (<img
                  src={users[authedUser].avatarURL}
                  alt={`Avatar of ${users[authedUser].name}`}
                  className='avatar pull-right'
                />)}
              </p>
              <div>
                {totalOptOne} {totalOptOne===1 ? <span>vote</span> : <span>votes</span>}
                <span className='pull-right'>
                  {(totalOptOne/totalVotes)*100}%
                </span>
              </div>

            </div>
            <div className='option'>
              <p>
                Option Two: {this.props.question.optionTwo.text}
                {question.optionTwo.votes.includes(authedUser) && (<img
                  src={users[authedUser].avatarURL}
                  alt={`Avatar of ${users[authedUser].name}`}
                  className='avatar pull-right'
                />)}
              </p>
              <div>
                {totalOptTwo} {totalOptTwo===1 ? <span>vote</span> : <span>votes</span>}
                <span className='pull-right'>
                  {(totalOptTwo/totalVotes)*100}%
                </span>
              </div>
            </div>
          </div>
        </li>
      )
    }else{
      return(
        <li key={this.props.question.id}>
          <h3 className='text-center'>Which Would You Rather Do:</h3>
          <div className='option'>
            <p>
              Option One: {this.props.question.optionOne.text}
              {question.optionOne.votes.includes(authedUser) && (<img
                src={users[authedUser].avatarURL}
                alt={`Avatar of ${users[authedUser].name}`}
                className='avatar pull-right'
              />)}
            </p>
          </div>
          <div className='option'>
            <p>
              Option Two: {this.props.question.optionTwo.text}
              {question.optionTwo.votes.includes(authedUser) && (<img
                src={users[authedUser].avatarURL}
                alt={`Avatar of ${users[authedUser].name}`}
                className='avatar pull-right'
              />)}
            </p>
          </div>
        </li>
      )
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]
  let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  let totalOptOne = question.optionOne.votes.length
  let totalOptTwo = question.optionTwo.votes.length

  return {
    id,
    authedUser,
    question,
    users,
    totalVotes,
    totalOptOne,
    totalOptTwo,
  }
}

export default connect(mapStateToProps)(PollDetail)
