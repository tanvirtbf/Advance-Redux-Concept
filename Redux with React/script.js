import { createStore } from 'redux';
import { products } from './productsList';
const initState = {
  products: products,
  cartItems: [],
  wishLists: [],
}

const ADD_CART_ITEM = 'cart/add'
const DELETE_CART_ITEM = 'cart/delete'
const INCREASE_CART_ITEM = 'cart/increaseItem'
const DECREASE_CART_ITEM = 'cart/decreaseItem'
const ADDWISHLIST = 'wishlist/add'
const DELETEWISHLIST = 'wishlist/delete'

function reducer(state=initState, action){
  switch(action.type){
    case ADD_CART_ITEM:
      return {...state, cartItems: [...state.cartItems, action.payload]}
    case DELETE_CART_ITEM:
      return {...state, cartItems: state.cartItems.filter((item)=> item.productId !== action.payload.productId)}
    case INCREASE_CART_ITEM:
      return {...state, cartItems: state.cartItems.map((item)=> {
        if(item.productId === action.payload.productId){
          return {...item, amount: item.amount + action.payload.amount}
        }
        return item;
      })}
    case DECREASE_CART_ITEM:
      return {...state, cartItems: state.cartItems.map((item)=>{
        if(item.productId === action.payload.productId){
          return {...item, amount: item.amount - action.payload.amount}
        }
        return item;
      })}
    default: 
      return state;
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)


store.dispatch({type: ADD_CART_ITEM, payload: {productId: 1, amount: 3}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 2, amount: 5}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 3, amount: 8}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 4, amount: 11}})
store.dispatch({type: DELETE_CART_ITEM, payload: {productId: 2}})

store.dispatch({type: INCREASE_CART_ITEM, payload: {productId: 3, amount: 3}})
store.dispatch({type: DECREASE_CART_ITEM, payload: {productId: 4, amount: 4}})

