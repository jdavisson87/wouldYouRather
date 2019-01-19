import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    const { question, author } = this.props
    const { id } = question
    console.log(this.props)
    return(
      <div>
        <h3>Would You Rather...</h3>
        <p>{question.optionOne.text}</p>
        <p>Or</p>
        <p>{question.optionTwo.text}</p>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }){

  const question = questions[id];
  const author = question && question.author ? users[question.author] : null;

  return {
    authedUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(Poll)
