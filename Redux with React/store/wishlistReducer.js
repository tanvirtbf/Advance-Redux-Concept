

export const ADDWISHLIST = 'wishlist/add'
export const DELETEWISHLIST = 'wishlist/delete'



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
