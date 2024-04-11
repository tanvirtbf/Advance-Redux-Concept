import {createStore} from 'redux'

const store = createStore(reducer)

const history = []

//reducer
function reducer(state = {amount: 0}, action){
  if(action.type === 'increment'){
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
  store.dispatch({type: 'increment', payload: 1})
},1000)



