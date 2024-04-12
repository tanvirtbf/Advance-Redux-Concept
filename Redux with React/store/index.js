import { combineReducers, createStore } from "redux";
import cartReducer, {
  addCartItem,
  decreaseCartItem,
  deleteCartItem,
  increaseCartItem,
} from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer, {
  addWishListItem,
  deleteWishListItem,
} from "./wishlistReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishLists: wishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// store.dispatch(addCartItem(1, 3));
// store.dispatch(addCartItem(2, 5));
// store.dispatch(addCartItem(3, 8));
// store.dispatch(addCartItem(4, 11));
// store.dispatch(deleteCartItem(2));

// store.dispatch(increaseCartItem(1, 3));
// store.dispatch(decreaseCartItem(4, 3));

// store.dispatch(addWishListItem(1));
// store.dispatch(addWishListItem(2));
// store.dispatch(addWishListItem(3));
// store.dispatch(addWishListItem(4));

// store.dispatch(deleteWishListItem(2));
