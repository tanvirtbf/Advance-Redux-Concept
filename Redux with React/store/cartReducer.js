export const ADD_CART_ITEM = "cart/add";
export const DELETE_CART_ITEM = "cart/delete";
export const INCREASE_CART_ITEM = "cart/increaseItem";
export const DECREASE_CART_ITEM = "cart/decreaseItem";

export function addCartItem(productData){
  return {type: ADD_CART_ITEM, payload: productData}
}
export function deleteCartItem(productId){
  return {type: DELETE_CART_ITEM, payload: {productId: productId}}
}
export function increaseCartItem(productId,amount){
  return {type: INCREASE_CART_ITEM, payload: {productId: productId, amount: amount}}
}
export function decreaseCartItem(productData){
  return {type: DECREASE_CART_ITEM, payload: productData}
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      const existingItem = state.find((item) => item.productId === action.payload.productId)
      if(existingItem){
        return state.map((item) => {
          if(item.productId === existingItem.productId){
            return {...item, amount: item.amount + 1}
          }
        })
      }
      return [...state, {...action.payload, amount: 1}];
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
