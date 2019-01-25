import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

    handleChangeOne = e => {
      const optionOne = e.target.value
      this.setState(() => ({
        optionOne
      }))
    }

    handleChangeTwo = e => {
      const optionTwo = e.target.value
      this.setState(() => ({
        optionTwo
      }))
    }

    handleSubmit = (event) => {
      console.log('worked')
      event.preventDefault()
    }

  render() {
    console.log(this.props, this.state)

    const { optionOne, optionTwo } = this.state

    return(
      <div>
        <h1 className='text-center'>Add Your "Would You Rather" Question </h1>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <label className='row'>
            Option One:
            <input type='text' value={optionOne} onChange={this.handleChangeOne} name='optionOne' />
          </label>
          <label className='row'>
            Option Two:
            <input type='text' value={optionTwo} onChange={this.handleChangeTwo} name='optionTwo' />
          </label>
          <input className='row center-block' type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ questions }){
  return {
    questions,
  }
}

export default connect(mapStateToProps)(AddQuestion)
