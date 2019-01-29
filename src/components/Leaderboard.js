import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { leaders } = this.props
    return(
      <div className='row'>
        <div className='leaderboard-head col-md-12 center-block'>
          <h3 className='col-md-3 text-center'>User</h3>
          <h3 className='col-md-3 text-center'>Questions answered</h3>
          <h3 className='col-md-3 text-center'>Questions asked</h3>
          <h3 className='col-md-3 text-center '>Total</h3>
        </div>
        <ul className='leaderboard col-md-12'>
          {leaders.map(leader=>(
            <li key={leader.id} className='row leader-entry'>
              <span className='col-md-3 text-center'>
                {leader.name}
              </span>
              <span className='col-md-3 text-center'>
                {leader.numbQuest}
              </span>
              <span className='col-md-3 text-center'>
                {leader.numbAsk}
              </span>
              <span className='col-md-3 text-center'>
                {leader.total}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  let leaders = Object.keys(users).map(user=>{
    let name=users[user].name
    let numbAsk = 0//users[user].questions.length
    let numbQuest = 0//Object.keys(users[user].answers).length
    let id= users[user].id

    for(let a in questions){
      if(questions[a].author === id){
        numbAsk++
      }
      if(questions[a].optionOne.votes.includes(id) || questions[a].optionTwo.votes.includes(id)){
        numbQuest++
      }
    }
    let total = numbQuest + numbAsk

    return {name,
      id,
      numbQuest,
      numbAsk,
      total,
    }
  })
  return{
    leaders,
    questions
  }
}

export default connect(mapStateToProps)(Leaderboard)
