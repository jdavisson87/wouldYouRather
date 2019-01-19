import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    const { question, author } = this.props
    const { id } = question
    console.log(this.props)
    if(this.props.answered===false){
      return(
        <div className='poll'>
          <p>{question.optionOne.text}</p>
          <p>Or</p>
          <p>{question.optionTwo.text}</p>
        </div>
      )
    }else if(this.props.answered===true){
      return(
        <div className='poll'>
          <span>
            <p>{question.optionOne.text}</p>
            <p>Number of Votes:  {question.optionOne.votes.length}</p>
          </span>
          <p>Or</p>
          <span>
            <p>{question.optionTwo.text}</p>
            <p>Number of Votes:  {question.optionTwo.votes.length}</p>
          </span>
          <p>Total Number of Votes: {(question.optionOne.votes.length)+(question.optionTwo.votes.length)}</p>
        </div>
      )
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }){

  const question = questions[id];
  const author = question && question.author ? users[question.author] : null;

  return {
    authedUser,
    users,
    question,
    author
  }
}

export default connect(mapStateToProps)(Poll)
