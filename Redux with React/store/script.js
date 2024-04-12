import { createStore } from 'redux';
import { products } from './productsList';
import { ADD_CART_ITEM, DECREASE_CART_ITEM, DELETE_CART_ITEM, INCREASE_CART_ITEM } from './cartReducer';
import { ADDWISHLIST, DELETEWISHLIST } from './wishlistReducer';
const initState = {
  products: products,
  cartItems: [],
  wishLists: [],
}




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
    case ADDWISHLIST: 
      return {...state, wishLists: [...state.wishLists, action.payload]}
    case DELETEWISHLIST:
      return {...state, wishLists: state.wishLists.filter((item)=> item.productId !== action.payload.productId)}
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

store.dispatch({type: ADDWISHLIST, payload: {productId: 1}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 2}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 3}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 4}})
store.dispatch({type: DELETEWISHLIST, payload: {productId: 3}})

