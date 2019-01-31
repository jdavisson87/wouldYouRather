import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'

class Login extends Component {

  handleSubmit = id => {
    const {dispatch} = this.props;
    dispatch(setAuthedUser(id))
  }

  render() {

    const { users } = this.props

    return (
      <div>
        {users.length !== 0 && <h3 className='center'>Click on a User to Login:</h3>}
        <ul className='login-users'>
          {Object.keys(users).map(id =>(
            <Link to='/' key={id}>
              <li className = 'user' onClick={(e)=>this.handleSubmit(id)}>
                <img
                  src={users[id].avatarURL}
                  alt={`Avatar of ${users[id].name}`}
                  className='avatar'
                />
                <p>{users[id].name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
