import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { authedUser, users } = this.props
    return (
      <div>
        <nav className='nav'>
          <ul className='nav-ul col-md-8'>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
          </ul>
          {authedUser !== null && (<span className='col-md-3 text-right'>
            <img
              src={users[authedUser].avatarURL}
              alt={`Avatar of ${users[authedUser].name}`}
              className='avatar'
            />
            <span>{authedUser}</span>
          </span>)}
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

export default connect(mapStateToProps)(Nav)
