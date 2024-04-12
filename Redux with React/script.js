import {createStore} from 'redux'
function reducer(state=[], action){
  return state;
}
const store = createStore(reducer)
console.log(store)