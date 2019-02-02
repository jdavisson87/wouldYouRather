import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Nav extends Component {

  logoutHandler = () => {
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push("/")
  }

  render() {
    const { authedUser, users } = this.props

    return (
      <div>
        <nav className='nav'>
          <ul className='nav-ul row'>
            <li className='col-md-2'>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li className='col-md-3'>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                Leaderboard
              </NavLink>
            </li>
            <li className='col-md-6'>
              <NavLink to='/add' exact activeClassName='active'>
                Add Question
              </NavLink>
            </li>
            {authedUser !== null && (<li className='logged-in col-md-5 text-right'>
              <img
                src={users[authedUser].avatarURL}
                alt={`Avatar of ${users[authedUser].name}`}
                className='avatar'
              />
              <span>{users[authedUser].name}</span>
              <button onClick={this.logoutHandler}>
                Logout
              </button>
            </li>)}
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ authedUser,users }){
  return {
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
