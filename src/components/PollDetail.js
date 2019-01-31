import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { handleAddQuestionAnswer } from "../actions/questions";


class PollDetail extends Component {
  render() {
    const { users, question, authedUser, id, questions, dispatch } = this.props

  if(Object.keys(questions).includes(id)===false){
    return <h3 className='text-center'>No question found</h3>
  }else if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){
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
                  {((totalOptOne/totalVotes)*100).toFixed(2)}%
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
                  {((totalOptTwo/totalVotes)*100).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </li>
      )
    }else{
      return(
        <li key={this.props.question.id}>
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
              Option One: {this.props.question.optionOne.text}
            </h4>
            <button className='btn btn-info pull-right' onClick={e =>{
              dispatch(handleAddQuestionAnswer(id, 'optionOne'))
            }}>Vote</button>
          </div>
          <div className='option'>
            <h4>
              Option Two: {this.props.question.optionTwo.text}
            </h4>
            <button className='btn btn-info pull-right' onClick={e =>{
              dispatch(handleAddQuestionAnswer(id, 'optionTwo'))
            }}>Vote</button>
          </div>
        </li>
      )
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]


  return {
    id,
    authedUser,
    question,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(PollDetail)
