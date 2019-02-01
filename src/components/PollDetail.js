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
        // <li key={props.question.id}>
        //   <h3 className='text-center'>Would You Rather:</h3>
        //   <div className='question-info'>
        //     <span>Author: {users[question.author].name}
        //       <img
        //         src={users[question.author].avatarURL}
        //         alt={`Avatar of ${users[question.author].name}`}
        //         className='avatar'
        //       />
        //     </span>
        //     <span className='pull-right'>{formatDate(question.timestamp)}</span>
        //   </div>
        //   <div className='option'>
        //     <h4>
        //       Option One: {props.question.optionOne.text}
        //     </h4>
        //     <button className='btn btn-info pull-right' onClick={e =>{
        //       dispatch(handleAddQuestionAnswer(id, 'optionOne'))
        //     }}>Vote</button>
        //   </div>
        //   <div className='option'>
        //     <h4>
        //       Option Two: {props.question.optionTwo.text}
        //     </h4>
        //     <button className='btn btn-info pull-right' onClick={e =>{
        //       dispatch(handleAddQuestionAnswer(id, 'optionTwo'))
        //     }}>Vote</button>
        //   </div>
        // </li>
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
