import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Poll extends Component {
  render() {
    console.log(this.props)
    if(this.props.question.optionOne.votes.includes(this.props.authedUser) || this.props.question.optionTwo.votes.includes(this.props.authedUser)){
      return(
        <li key={this.props.question.id} className='list-group-item col-md-8 center-block'>
          <p>Author: {this.props.question.author}</p>
          <p>{formatDate(this.props.question.timestamp)}</p>
          <p>Option One: {this.props.question.optionOne.text}</p>
          <p>Option Two: {this.props.question.optionTwo.text}</p>
        </li>
      )
    }else{
      return(
        <li key={this.props.question.id}>Not Answered</li>
      )
    }
    // return(
    //     <div>
    //       {this.props.id}
    //       {this.props.question.author}
    //       {this.props.question.optionOne.text}
    //       {this.props.question.optionTwo.text}
    //     </div>
    // )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question,
  }
}

export default connect(mapStateToProps)(Poll)
