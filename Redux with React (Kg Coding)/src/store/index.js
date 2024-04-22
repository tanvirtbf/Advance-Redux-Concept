import {createStore} from 'redux'

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch(action.type){
    case 'increment':
      return {...store, counter: store.counter + action.payload}
    case 'decrement':
      return {...store,counter: store.counter - action.payload}
    case 'ADD':
      return {...store, counter: store.counter + action.payload}
    case 'SUBTRACT':
      return {...store,counter: store.counter - action.payload}
    case 'PRIVACY':
      return {...store, privacy: !store.privacy }
    default:
      return store;
  }
}

const counterStore = createStore(counterReducer)

export default counterStore;