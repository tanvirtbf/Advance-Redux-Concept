import {createStore} from 'redux'

const store = createStore(reducer)

const history = []

//reducer
function reducer(state = {amount: 0}, action){
  if(action.type === 'increment'){
    state.amount += action.payload
  }
  return state
}


//global state

store.subscribe(()=>{
  console.log(store.getState())
})


store.dispatch({type: 'increment', payload: 2})

