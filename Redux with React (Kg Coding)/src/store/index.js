import {createStore} from 'redux'

const INITIAL_VALUE = {
  counter: 1
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'increment':
      return {counter: store.counter + action.payload}
    case 'decrement':
      return {counter: store.counter - action.payload}
  }
  return store;
}

const counterStore = createStore(counterReducer)

export default counterStore;