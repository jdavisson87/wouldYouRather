import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    const { question, author } = this.props
    const { id } = question
    console.log(author.answers[id]==='optionOne')
    return(
      <div>
        <p>{author.name}</p>
        <p>{author.answers[id]}</p>
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
