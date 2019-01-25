import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users, leaders } = this.props
   leaders.sort((a,b) => b.total-a.total)
    console.log('leaders', leaders)
    return(
      <div className='row'>
        <div className='leaderboard-head col-md-12 center-block'>
          <h3 className='col-md-3 text-center'>User</h3>
          <h3 className='col-md-3 text-center'>Questions answers</h3>
          <h3 className='col-md-3 text-center'>Questions asked</h3>
          <h3 className='col-md-3 text-center '>Total</h3>
        </div>
        <ul className='leaderboard col-md-12'>
          {leaders.map(leader=>(
            <li key={leader.id} className='row'>
              <span className='col-md-3 text-center'>
                {leader.user}
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

function mapStateToProps({ users }) {
  let leaders = Object.keys(users).map(user=>{
    let numbQuest= users[user].questions.length
    let numbAsk= Object.keys(users[user].answers).length
    let total = numbQuest + numbAsk
    let id= users[user].id
    return {user,
      id,
      numbQuest,
      numbAsk,
      total
    }
  })
  return{
    users,
    leaders,
  }
}

export default connect(mapStateToProps)(Leaderboard)
