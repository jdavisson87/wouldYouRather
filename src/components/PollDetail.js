import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class PollDetail extends Component {
  render() {
    console.log('here', this.props)
    return(
      <div>PollDetail</div>
    )
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params
  return{
    questions,
    id
  }
}
export default connect()(PollDetail)
