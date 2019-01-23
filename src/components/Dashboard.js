import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component {
  state = {
    view: 'unanswered'
  }
  render() {
    const { answered, unanswered, questions } = this.props
    let questionIds = this.state.view === 'unanswered'
      ? this.props.unanswered
      : this.props.answered

      return (
        <div>
          <h1>Which list of polls would you like to view?</h1>
          <select className='list-view' onChange={(event)=> this.setState({view: event.target.value})}>
            <option value='unanswered'>Unanswered List</option>
            <option value='answered'>Answered List</option>
          </select>
          <h2>{this.state.view}</h2>
          <h3>What would you rather do?</h3>
          <ul className='list-group'>
            {questionIds.map(q=> (
              // <li key={q} className='list-group-item col-md-8 center-block'>
              //   <p>{questions[q].optionOne.text}</p>
              //   <p>Or</p>
              //   <p>{questions[q].optionTwo.text}</p>
              //   <button type="button" class="btn btn-primary">See Details</button>
              // </li>))}
              <Poll key={q} id={q}/>
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
      questions,
  }
}

export default connect(mapStateToProps)(Dashboard)
