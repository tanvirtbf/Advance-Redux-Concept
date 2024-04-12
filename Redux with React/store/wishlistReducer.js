export const ADDWISHLIST = 'wishlist/add'
export const DELETEWISHLIST = 'wishlist/delete'
export default function wishlistReducer(){
  switch(action.type){
    case ADDWISHLIST: 
      return {...state, wishLists: [...state.wishLists, action.payload]}
    case DELETEWISHLIST:
      return {...state, wishLists: state.wishLists.filter((item)=> item.productId !== action.payload.productId)}
    default: 
      return state;
  }
}
