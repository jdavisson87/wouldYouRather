import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component {
  state = {
    view: 'unanswered'
  }
  render() {
    const { answered, unanswered, questions } = this.props

    if(this.state.view==='unanswered'){
      return (
        <div>
          <h1>Which list of polls would you like to view?</h1>
          <select className='list-view' onChange={(event)=> this.setState({view: event.target.value})}>
            <option value='unanswered'>Unanswered List</option>
            <option value='answered'>Answered List</option>
          </select>
          <h2>UnAnswered List</h2>
          <h3>What would you rather do?</h3>
          <ul className='unanswered-list'>

            {/* {this.props.unanswered.map(id=>(
              <li key={id}>
                <Poll id={id} answered={false}/>
              </li>
            ))} */}
            {this.props.unanswered.map(q=> (
              <li key={q} className='poll'>
                <p>{questions[q].optionOne.text}</p>
                <p>Or</p>
                <p>{questions[q].optionTwo.text}</p>
              </li>))}
          </ul>
        </div>
      )}else if(this.state.view==='answered'){
          return(
            <div>
              <h1>Which list of polls would you like to view?</h1>
              <select className='list-view' onChange={(event)=> this.setState({view: event.target.value})}>
                <option value='unanswered'>Unanswered List</option>
                <option value='answered'>Answered List</option>
              </select>
              <h2>Answered List</h2>
              <h3>What would you rather do?</h3>
              <ul className='answered-list'>
                {/* {this.props.answered.map(id=>(
                  <li key={id}>
                    <Poll id={id} answered={true}/>
                  </li>
                ))} */}
                {this.props.answered.map(q=> (
                  <li key={q} className='poll'>
                    <p>{questions[q].optionOne.text}</p>
                    <p>Or</p>
                    <p>{questions[q].optionTwo.text}</p>
                  </li>))}
              </ul>
            </div>
          )
      }
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
