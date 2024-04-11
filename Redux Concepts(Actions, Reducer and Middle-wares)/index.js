import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default))

const history = []

//reducer
function reducer(state = {amount: 0}, action){
  if(action.type === 'increment'){
    return {amount: state.amount + action.payload}
  }
  if(action.type === 'decrement'){
    return {amount: state.amount + action.payload}
  }
  if(action.type === 'incrementByAmount'){
    return {amount: state.amount + action.payload}
  }
  return state
}


//global state

store.subscribe(()=>{
  history.push(store.getState())
  console.log(history)
})

setInterval(()=>{
  store.dispatch({type: 'incrementByAmount', payload: 5})
},2000)



