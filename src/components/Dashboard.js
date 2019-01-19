import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { answered, unanswered } = this.props
    return (
      <div>
        <ul>
          {this.props.answered.map(q=>(
            <li key={q}>
              {q}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    answered: Object.keys(questions)
      .filter(q =>
        questions[q].optionOne.votes.indexOf(authedUser) !== -1 ||
        questions[q].optionTwo.votes.indexOf(authedUser) !== -1
      )
      .sort((a,b) => questions[b].timestamp-questions[a].timestamp),
    unanswered: Object.keys(questions)
      .filter(q =>
        questions[q].optionOne.votes.indexOf(authedUser) === -1 &&
        questions[q].optionTwo.votes.indexOf(authedUser) === -1
      )
      .sort((a,b) => questions[b].timestamp-questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Dashboard)
