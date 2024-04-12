export const ADD_CART_ITEM = "cart/add";
export const DELETE_CART_ITEM = "cart/delete";
export const INCREASE_CART_ITEM = "cart/increaseItem";
export const DECREASE_CART_ITEM = "cart/decreaseItem";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return [...state, action.payload];
    case DELETE_CART_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case INCREASE_CART_ITEM:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, amount: item.amount + action.payload.amount };
        }
        return item;
      });
    case DECREASE_CART_ITEM:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, amount: item.amount - action.payload.amount };
        }
        return item;
      });
    default:
      return state;
  }
}
