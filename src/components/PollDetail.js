import React from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'

function PollDetail(props) {

  const { question, authedUser, id, questions, } = props

  if(Object.keys(questions).includes(id)===false){
    return <h3 className='text-center'>No question found</h3>
  }else if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){
    return(
      <Answered id={id}/>
    )
  }else{
    return(
      <Unanswered id={id}/>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]

  return {
    id,
    authedUser,
    question,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(PollDetail)
