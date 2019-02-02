import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component {

  state = {
    view: 'unanswered'
  }

  render() {
    const { answered, unanswered } = this.props

    let questionIds = this.state.view === 'unanswered'
      ? unanswered : answered

      return (
        <div className='dashboard'>
          <h1>Which list of polls would you like to view?</h1>
          <select className='list-view' onChange={(event)=> this.setState({view: event.target.value})}>
            <option value='unanswered'>Unanswered List</option>
            <option value='answered'>Answered List</option>
          </select>
          <h2>What would you rather do?</h2>
          <h4>Click on the poll to see more details</h4>
          <ul className='list-group'>
            {questionIds.length>0 && questionIds.map(q=> (
              <Poll key={q} id={q}/>
            ))}
            {(this.state.view==='unanswered' && questionIds.length===0) &&
            <h3>There are no polls to show.  Why not create a poll for everyone to answer?</h3>}
            {(this.state.view==='answered' && questionIds.length===0) &&
            <h3>You have not answered any polls yet.</h3>}
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
