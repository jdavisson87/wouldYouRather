import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  handleSubmit = id => {
    const {dispatch} = this.props;
    dispatch(setAuthedUser(id))
  }

  render() {

    const { users, authedUser } = this.props // userIds removed from const
    console.log({authedUser})
    return (
      <div>
        {users.length !== 0 && <h3 className='center'>Click on a User to Login:</h3>}
        <ul className='login-users'>
          {Object.keys(users).map(id =>(
            <li key={id} className = 'user' onClick={(e)=>this.handleSubmit(id)}>
              <img
                src={users[id].avatarURL}
                alt={`Avatar of ${users[id].name}`}
                className='avatar'
              />
              <p>{users[id].name}</p>

            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    // userIds: Object.keys(users),
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(Login)