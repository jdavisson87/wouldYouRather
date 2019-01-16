//logger middleware that will log the state, then run the next action, and then
//it will log the updated state

const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    const returnValue= next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger
