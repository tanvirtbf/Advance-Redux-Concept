import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

//Action Name Constant
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";
const init = "init";

const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

const history = [];

//reducer
function reducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case init: 
    return {amount: action.payload}
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - action.payload };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

//global state

// store.subscribe(()=>{
//   history.push(store.getState())
//   console.log(history)
// })

//Async API Call
async function getUser(){
  const {data} = await axios.get('http://localhost:3000/accounts/1')
  console.log(data)
}
getUser()

//Action Creators
async function initUser(value) {
  const {data} = await axios.get('http://localhost:3000/accounts/1')
  return { type: init, payload: value };
}
function increment() {
  return { type: inc };
}
function decrement(value) {
  return { type: dec, payload: value };
}
function incrementByAmount(type, value) {
  return { type: type, payload: value };
}

setInterval(() => {
  // store.dispatch(increment())
  // store.dispatch(decrement(2))
  store.dispatch(initUser());
}, 2000);
