import {createStore} from 'redux'

const INITIAL_VALUE = {
  counter: 0
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'increment':
      return {counter: store.counter + action.payload}
    case 'decrement':
      return {counter: store.counter - action.payload}
    case 'ADD':
      return {counter: store.counter + action.payload}
    case 'SUBTRACT':
      return {counter: store.counter - action.payload}
    default:
      return store;
  }
}

const counterStore = createStore(counterReducer)

export default counterStore;