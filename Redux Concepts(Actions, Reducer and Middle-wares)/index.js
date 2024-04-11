import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default))

const history = []

//reducer
function reducer(state = {amount: 0}, action){
  if(action.type === 'increment'){
    return {amount: state.amount + 1}
  }
  if(action.type === 'decrement'){
    return {amount: state.amount - action.payload}
  }
  if(action.type === 'incrementByAmount'){
    return {amount: state.amount + action.payload}
  }
  return state
}


//global state

// store.subscribe(()=>{
//   history.push(store.getState())
//   console.log(history)
// })

//Action Creators
function increment(){
  return {type: 'increment'}
}
function decrement(value){
  return {type: 'decrement', payload: value}
}
function incrementByAmount(type, value){
  return {type: type, payload: value}
}

setInterval(()=>{
  // store.dispatch(increment())
  // store.dispatch(decrement(2))
  store.dispatch(incrementByAmount('incrementByAmount', 4))
},2000)



