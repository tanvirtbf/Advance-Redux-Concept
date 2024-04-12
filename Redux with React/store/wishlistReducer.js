export const ADDWISHLIST = 'wishlist/add'
export const DELETEWISHLIST = 'wishlist/delete'

export function addWishListItem(productId,amount){
  return {type: ADDWISHLIST, payload: {productId,amount}}
}
export function deleteWishListItem(productId){
  return {type: DELETEWISHLIST, payload: {productId}}
}

export default function wishlistReducer(state = [], action){
  switch(action.type){
    case ADDWISHLIST: 
      return [...state, action.payload]
    case DELETEWISHLIST:
      return state.filter((item) => item.productId !== action.payload.productId)
    default: 
      return state;
  }
}
