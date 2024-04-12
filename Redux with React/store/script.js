import { combineReducers, createStore } from 'redux';
import cartReducer, { ADD_CART_ITEM, DECREASE_CART_ITEM, DELETE_CART_ITEM, INCREASE_CART_ITEM } from './cartReducer';
import wishlistReducer, { ADDWISHLIST, DELETEWISHLIST } from './wishlistReducer';
import productReducer from './productReducer';

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishLists: wishlistReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())


store.dispatch({type: ADD_CART_ITEM, payload: {productId: 1, amount: 3}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 2, amount: 5}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 3, amount: 8}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 4, amount: 11}})
store.dispatch({type: DELETE_CART_ITEM, payload: {productId: 2}})

store.dispatch({type: INCREASE_CART_ITEM, payload: {productId: 3, amount: 2}})
store.dispatch({type: DECREASE_CART_ITEM, payload: {productId: 4, amount: 4}})

store.dispatch({type: ADDWISHLIST, payload: {productId: 1}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 2}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 3}})
store.dispatch({type: ADDWISHLIST, payload: {productId: 4}})
store.dispatch({type: DELETEWISHLIST, payload: {productId: 3}})

