import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

//Action Name Constant
const inc = 'increment'
const dec = 'decrement'
const incByAmount = 'incrementByAmount'

const store = createStore(reducer, applyMiddleware(logger.default))


const history = []

//reducer
function reducer(state = {amount: 0}, action){
  if(action.type === inc){
    return {amount: state.amount + 1}
  }
  if(action.type === dec){
    return {amount: state.amount - action.payload}
  }
  if(action.type === incByAmount){
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
  return {type: inc}
}
function decrement(value){
  return {type: dec, payload: value}
}
function incrementByAmount(type, value){
  return {type: type, payload: value}
}

setInterval(()=>{
  // store.dispatch(increment())
  // store.dispatch(decrement(2))
  store.dispatch(incrementByAmount(incByAmount, 4))
},2000)



