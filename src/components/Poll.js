import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Poll extends Component {
  render() {
    const { users, authedUser, question } = this.props
    console.log(this.props)
    if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){
      return(
        <li key={this.props.question.id} className='list-group-item col-md-8 center-block'>
          <div className='question-info'>
            <span>Author: {this.props.question.author}</span>
            <div>{formatDate(this.props.question.timestamp)}</div>
          </div>
          <div>
            <h3>Would you Rather:</h3>
            <p>
              {question.optionOne.votes.includes(authedUser) && (<img
                src={users[authedUser].avatarURL}
                alt={`Avatar of ${users[authedUser].name}`}
                className='avatar'
              />)}
              Option One: {this.props.question.optionOne.text}
            </p>
            <p>
            {question.optionTwo.votes.includes(authedUser) && (<img
              src={users[authedUser].avatarURL}
              alt={`Avatar of ${users[authedUser].name}`}
              className='avatar'
            />)}
            Option Two: {this.props.question.optionTwo.text}
          </p>
          </div>
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
    users
  }
}

export default connect(mapStateToProps)(Poll)
