import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard'
import PollDetail from './PollDetail'
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
            {this.props.loading === true ?
              <Login />
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/question/:id' component={PollDetail} />
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
