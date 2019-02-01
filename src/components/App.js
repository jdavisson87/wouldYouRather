import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Dashboard from './Dashboard'
import PollDetail from './PollDetail'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            {this.props.loading === true ?
              <Login />
              : <div>
                  <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/question/:id' component={PollDetail} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/login' component={Login} />
                    <Route path='/add' component={AddQuestion} />
                  </Switch>
                </div>
                }
          </div>
          </Fragment>
        </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
