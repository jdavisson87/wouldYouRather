import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    finish: false,
  }

  handleChange = e => {
    if(e.target.name === 'optionOne'){
      const optionOneText = e.target.value
      this.setState(()=> ({
        optionOneText
      }))
    }else if (e.target.name === 'optionTwo'){
      const optionTwoText = e.target.value
      this.setState(() => ({
        optionTwoText
      }))
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, id, author} = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText, author))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      finish: id ? false : true
    }))

  }

  render() {

    const { optionOneText, optionTwoText, finish } = this.state

    if (finish === true){
      return <Redirect to='/' />
    }

    return(
      <div>
        <h1 className='text-center'>Add Your "Would You Rather" Question </h1>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <label className='row'>
            Option One:
            <input type='text' value={optionOneText} onChange={this.handleChange} name='optionOne' />
          </label>
          <label className='row'>
            Option Two:
            <input type='text' value={optionTwoText} onChange={this.handleChange} name='optionTwo' />
          </label>
          <input className='row center-block' type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }){
  return {
    author: authedUser,
  }
}

export default connect(mapStateToProps)(AddQuestion)
